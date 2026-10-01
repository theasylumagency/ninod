"use client";

import { useRef, useState } from "react";
import {
  STUDIO_CONTACT,
  catalogueNo,
  formatUsd,
  inquiryMessage,
  mailtoHref,
  whatsappHref,
  type PolyphonyWork,
} from "@/data/polyphony";
import { track, workItem } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "fallback";

const WORK_INTENTS = [
  "Acquire this work",
  "Reserve / hold it",
  "Ask a question",
  "See it at the fair",
] as const;

const GENERAL_INTERESTS = [
  "Original Work",
  "Polyphony collection",
  "The Wearable Archive",
  "Editions",
  "Collaboration",
  "Gallery / Press Inquiry",
];

interface InquiryFormProps {
  /** A Polyphony work — the form becomes a short, work-specific inquiry. */
  work?: PolyphonyWork;
  /** Free-text item from the URL (e.g. /acquire?item=…). */
  itemLabel?: string;
  defaultInterest?: string;
  /** Where the form lives — sent to analytics. */
  source?: string;
}

const labelClass =
  "text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium";
const fieldClass =
  "bg-transparent border-b border-stone-grey/30 py-2 text-sm tracking-wide focus:outline-none focus:border-deep-oxblood transition-colors placeholder:text-stone-grey/50 text-ink-black";

export default function InquiryForm({
  work,
  itemLabel,
  defaultInterest = "Original Work",
  source = "acquire",
}: InquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    intent: work ? WORK_INTENTS[0] : "",
    interest: GENERAL_INTERESTS.includes(defaultInterest) ? defaultInterest : "Original Work",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);

  const itemName = work
    ? `${work.title} (${work.year}) — Polyphony, cat. ${catalogueNo(work.no)}`
    : itemLabel || "";
  const price = work ? formatUsd(work.priceUsd) : "";

  const leadParams = () => ({
    lead_source: source,
    intent: form.intent || form.interest,
    ...(work
      ? { currency: "USD", value: work.priceUsd, items: [workItem(work)] }
      : { item_name: itemLabel || form.interest }),
  });

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    track("inquiry_start", leadParams());
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const fullMessage = () => {
    const pageUrl = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
    const base = work ? inquiryMessage(work, pageUrl) : itemLabel ? `Inquiry about: ${itemLabel}` : "";
    return [
      base,
      form.intent && `I would like to: ${form.intent.toLowerCase()}.`,
      form.message,
      `— ${form.name}${form.email ? `, ${form.email}` : ""}${form.phone ? `, ${form.phone}` : ""}`,
    ]
      .filter(Boolean)
      .join("\n\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interest: work ? "Polyphony" : form.interest,
          item: itemName,
          price,
          page: window.location.href,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setStatus("sent");
        track("generate_lead", leadParams());
      } else {
        setStatus("fallback");
        track("inquiry_fallback", leadParams());
      }
    } catch {
      setStatus("fallback");
      track("inquiry_fallback", leadParams());
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-paper-grey/50 border border-stone-grey/20 min-h-[320px]">
        <div className="w-16 h-16 rounded-full border border-deep-oxblood flex items-center justify-center mb-6">
          <span className="font-serif text-deep-oxblood text-lg font-bold">D</span>
        </div>
        <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-ink-black mb-4">
          Inquiry Received
        </h3>
        <p className="text-xs text-stone-grey leading-relaxed max-w-sm mb-6">
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. The studio will reply to{" "}
          <span className="text-ink-black">{form.email}</span> — usually within one working day.
          {work ? " During the fair, replies may be faster on WhatsApp." : ""}
        </p>
        {work && (
          <a
            href={whatsappHref(fullMessage())}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("contact_click", { method: "whatsapp", lead_source: `${source}_after_submit`, items: [workItem(work)] })}
            className="text-[10px] uppercase tracking-[0.25em] text-ink-black border-b border-ink-black/30 pb-1 hover:text-deep-oxblood hover:border-deep-oxblood transition-colors"
          >
            Continue on WhatsApp &rarr;
          </a>
        )}
      </div>
    );
  }

  if (status === "fallback") {
    const msg = fullMessage();
    const subject = work ? `Inquiry: ${work.title} — Polyphony` : `Inquiry${itemLabel ? `: ${itemLabel}` : ""}`;
    return (
      <div className="flex flex-col p-8 md:p-12 bg-paper-grey/50 border border-stone-grey/20 space-y-6">
        <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-ink-black">
          One last step
        </h3>
        <p className="text-xs text-stone-grey leading-relaxed max-w-md">
          Your message could not be sent automatically. It is ready below — send it to the studio
          with one tap.
        </p>
        <pre className="whitespace-pre-wrap font-sans text-xs text-ink-black/80 bg-warm-ivory border border-stone-grey/20 p-4 leading-relaxed">
          {msg}
        </pre>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref(msg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("contact_click", { method: "whatsapp", lead_source: `${source}_fallback` })}
            className="bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 text-center hover:bg-deep-oxblood transition-colors"
          >
            Send via WhatsApp
          </a>
          <a
            href={mailtoHref(subject, msg)}
            onClick={() => track("contact_click", { method: "email", lead_source: `${source}_fallback` })}
            className="border border-ink-black/30 text-ink-black text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 text-center hover:border-ink-black transition-colors"
          >
            Send via Email
          </a>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="self-start text-[10px] uppercase tracking-[0.2em] text-stone-grey hover:text-ink-black transition-colors"
        >
          &larr; Edit message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={onFirstFocus}
      className="w-full flex flex-col space-y-8 bg-paper-grey/30 border border-stone-grey/20 p-6 sm:p-8 md:p-10"
    >
      {/* Work being inquired about */}
      {work && (
        <div className="flex items-baseline justify-between gap-4 border-b border-stone-grey/20 pb-4">
          <div>
            <p className={labelClass}>Work</p>
            <p className="font-serif text-lg text-ink-black mt-1">
              {work.title}
              <span className="text-stone-grey">, {work.year}</span>
            </p>
          </div>
          <p className="font-serif text-lg text-deep-oxblood whitespace-nowrap">{price}</p>
        </div>
      )}

      {/* Intent — what the collector wants */}
      {work && (
        <fieldset className="space-y-3">
          <legend className={`${labelClass} mb-3`}>I would like to</legend>
          <div className="flex flex-wrap gap-2">
            {WORK_INTENTS.map((opt) => {
              const active = form.intent === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setForm((f) => ({ ...f, intent: opt }))}
                  className={`text-[10px] uppercase tracking-[0.18em] py-2 px-3 border transition-colors ${
                    active
                      ? "bg-ink-black text-warm-ivory border-ink-black"
                      : "border-stone-grey/40 text-ink-black hover:border-ink-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor={`${source}-name`} className={labelClass}>Name</label>
          <input
            type="text"
            id={`${source}-name`}
            required
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor={`${source}-email`} className={labelClass}>Email</label>
          <input
            type="email"
            id={`${source}-email`}
            required
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor={`${source}-phone`} className={labelClass}>
          Phone / WhatsApp <span className="normal-case tracking-normal text-stone-grey/70">(optional)</span>
        </label>
        <input
          type="tel"
          id={`${source}-phone`}
          autoComplete="tel"
          value={form.phone}
          onChange={set("phone")}
          placeholder="+1 …"
          className={fieldClass}
        />
      </div>

      {!work && (
        <div className="flex flex-col space-y-2">
          <label htmlFor={`${source}-interest`} className={labelClass}>Area of Interest</label>
          <select
            id={`${source}-interest`}
            value={form.interest}
            onChange={set("interest")}
            className={`${fieldClass} cursor-pointer appearance-none`}
          >
            {GENERAL_INTERESTS.map((opt) => (
              <option key={opt} value={opt} className="bg-warm-ivory text-ink-black">
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col space-y-2">
        <label htmlFor={`${source}-message`} className={labelClass}>
          Message {work && <span className="normal-case tracking-normal text-stone-grey/70">(optional)</span>}
        </label>
        <textarea
          id={`${source}-message`}
          required={!work}
          rows={work ? 3 : 5}
          value={form.message}
          onChange={set("message")}
          placeholder={work ? "Questions about framing, shipping, viewing…" : "Please describe your inquiry"}
          className={`${fieldClass} resize-none leading-relaxed`}
        />
      </div>

      {/* Honeypot (hidden from people) */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
        </label>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : work ? "Send inquiry" : "Submit Inquiry"}
        </button>
        <p className="text-[10px] text-stone-grey leading-relaxed tracking-wide">
          Or write directly:{" "}
          <a
            href={whatsappHref(work ? inquiryMessage(work) : itemLabel ? `Hello, I am interested in ${itemLabel}.` : "Hello,")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("contact_click", { method: "whatsapp", lead_source: source, ...(work ? { items: [workItem(work)] } : {}) })}
            className="text-ink-black underline underline-offset-2 hover:text-deep-oxblood"
          >
            WhatsApp
          </a>{" "}
          ·{" "}
          <a
            href={`mailto:${STUDIO_CONTACT.email}`}
            onClick={() => track("contact_click", { method: "email", lead_source: source, ...(work ? { items: [workItem(work)] } : {}) })}
            className="text-ink-black underline underline-offset-2 hover:text-deep-oxblood"
          >
            {STUDIO_CONTACT.email}
          </a>
        </p>
      </div>
    </form>
  );
}
