import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Temporary store: newline-delimited JSON in /data.
// Swap this handler for a provider (Mailchimp / Klaviyo / Beehiiv) later.
const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "waitlist.jsonl");

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body?.source === "string" ? body.source : "site";

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const line =
      JSON.stringify({ email, source, at: new Date().toISOString() }) + "\n";

    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(FILE, line, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
