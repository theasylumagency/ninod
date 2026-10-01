// ============================================================
//  Studio notifications — used by inquiries and the reservation list.
//  Channels (any that are configured are used):
//    • Telegram — TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
//    • Email    — RESEND_API_KEY (+ INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL)
//  Server-only. Returns true if at least one channel delivered.
// ============================================================

import { promises as fs } from "fs";
import path from "path";

export async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function sendEmail(opts: { subject: string; text: string; replyTo?: string }): Promise<boolean> {
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
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
        subject: opts.subject,
        text: opts.text,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Sends to every configured channel; true if any of them delivered. */
export async function notifyStudio(opts: { subject: string; text: string; replyTo?: string }) {
  const [telegram, email] = await Promise.all([sendTelegram(opts.text), sendEmail(opts)]);
  return telegram || email;
}

/** Appends one JSON line to data/<file> as a backup copy. Best effort. */
export async function appendLog(file: string, record: unknown): Promise<boolean> {
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(path.join(dir, file), JSON.stringify(record) + "\n", "utf8");
    return true;
  } catch {
    return false;
  }
}
