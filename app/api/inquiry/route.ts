import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

const DATA_DIR = path.join(process.cwd(), "data");
const LOG_FILE = path.join(DATA_DIR, "inquiries.jsonl");
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

async function sendTelegram(q: Inquiry): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: asText(q), disable_web_page_preview: true }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function sendEmail(q: Inquiry): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const to = process.env.INQUIRY_TO_EMAIL || "studio@ninod.space";
  const from = process.env.INQUIRY_FROM_EMAIL || "Nino D Website <inquiries@ninod.space>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: q.email,
        subject: q.item ? `Inquiry: ${q.item} — ${q.name}` : `Inquiry from ${q.name}`,
        text: asText(q),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function logToFile(q: Inquiry): Promise<boolean> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(LOG_FILE, JSON.stringify(q) + "\n", "utf8");
    return true;
  } catch {
    return false;
  }
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

  const [telegram, email, stored] = await Promise.all([sendTelegram(q), sendEmail(q), logToFile(q)]);
  const delivered = telegram || email;

  if (!delivered) {
    // Not lost: the client switches to the prefilled WhatsApp / email hand-off.
    return NextResponse.json({ ok: false, delivered: false, stored }, { status: 503 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
