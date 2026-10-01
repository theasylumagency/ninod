import { NextResponse } from "next/server";
import { appendLog, notifyStudio } from "@/lib/notify";

// ============================================================
//  Collector inquiries.
//
//  Delivery channels (any that are configured are used):
//    • Telegram  — TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID  (instant, on the phone)
//    • Email     — RESEND_API_KEY (+ INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL)
//    • Log file  — always attempted: data/inquiries.jsonl (backup copy)
//
//  The request counts as delivered only if Telegram or email succeeded.
//  Otherwise the visitor is shown direct WhatsApp / email buttons with the
//  message prefilled, so an inquiry is never silently lost.
// ============================================================

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  intent: string;
  interest: string;
  item: string;
  price: string;
  message: string;
  page: string;
  at: string;
};

function asText(q: Inquiry) {
  const head = [
    `New inquiry — ninod.space`,
    q.item && `Work: ${q.item}${q.price ? ` (${q.price})` : ""}`,
    q.intent && `Wants to: ${q.intent}`,
    q.interest && `Area: ${q.interest}`,
    `Name: ${q.name}`,
    `Email: ${q.email}`,
    q.phone && `Phone / WhatsApp: ${q.phone}`,
  ].filter(Boolean);
  const foot = [q.page && `Sent from: ${q.page}`, `Time (UTC): ${q.at}`].filter(Boolean);
  return [head.join("\n"), q.message, foot.join("\n")].filter(Boolean).join("\n\n");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot — real visitors never fill this hidden field.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const q: Inquiry = {
    name: clean(body.name, 200),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 60),
    intent: clean(body.intent, 80),
    interest: clean(body.interest, 120),
    item: clean(body.item, 200),
    price: clean(body.price, 40),
    message: clean(body.message, 4000),
    page: clean(body.page, 300),
    at: new Date().toISOString(),
  };

  if (!q.name || !EMAIL_RE.test(q.email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const [delivered, stored] = await Promise.all([
    notifyStudio({
      subject: q.item ? `Inquiry: ${q.item} — ${q.name}` : `Inquiry from ${q.name}`,
      text: asText(q),
      replyTo: q.email,
    }),
    appendLog("inquiries.jsonl", q),
  ]);

  if (!delivered) {
    // Not lost: the client switches to the prefilled WhatsApp / email hand-off.
    return NextResponse.json({ ok: false, delivered: false, stored }, { status: 503 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
