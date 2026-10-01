import { NextResponse } from "next/server";
import { appendLog, notifyStudio } from "@/lib/notify";

// Reservation list (Edition 01 and individual designs).
// Each sign-up is sent to the studio (Telegram / email, see lib/notify.ts)
// and appended to data/waitlist.jsonl as a backup copy.
// Swap for a mailing provider (Mailchimp / Klaviyo / Beehiiv) later if needed.

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase().slice(0, 200) : "";
    const source = typeof body?.source === "string" ? body.source.slice(0, 120) : "site";
    const page = typeof body?.page === "string" ? body.page.slice(0, 300) : "";

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const at = new Date().toISOString();
    const design = source.startsWith("reserve:") ? source.slice("reserve:".length) : "";

    const [notified, stored] = await Promise.all([
      notifyStudio({
        subject: design ? `Reservation list: ${design} — ${email}` : `Reservation list: ${email}`,
        text: [
          design ? `New reservation — ${design}` : "New reservation list sign-up",
          `Email: ${email}`,
          `Source: ${source}`,
          page && `Page: ${page}`,
          `Time (UTC): ${at}`,
        ]
          .filter(Boolean)
          .join("\n"),
        replyTo: email,
      }),
      appendLog("waitlist.jsonl", { email, source, page, at }),
    ]);

    if (!notified && !stored) {
      return NextResponse.json({ error: "not_saved" }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
