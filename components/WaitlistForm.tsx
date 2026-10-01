"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "loading" | "done" | "error";

export default function WaitlistForm({
  source = "site",
  theme = "light",
  cta = "Join",
  successText = "You are on the reservation list. We will write to you before Edition 01 opens.",
}: {
  source?: string;
  theme?: "light" | "dark";
  /** Button label. */
  cta?: string;
  /** Message shown after a successful sign-up. */
  successText?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const dark = theme === "dark";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source, page: window.location.href }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      setEmail("");
      track("join_waitlist", { lead_source: source });
    } catch {
      setStatus("error");
      track("join_waitlist_error", { lead_source: source });
    }
  };

  if (status === "done") {
    return (
      <p
        className={`font-serif italic text-base md:text-lg ${
          dark ? "text-warm-ivory" : "text-deep-oxblood"
        }`}
      >
        {successText}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <div
        className={`flex items-center border-b transition-colors py-2 ${
          dark
            ? "border-warm-ivory/40 focus-within:border-warm-ivory"
            : "border-ink-black/25 focus-within:border-deep-oxblood"
        }`}
      >
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-transparent border-none text-xs uppercase tracking-wider focus:outline-none w-full ${
            dark
              ? "text-warm-ivory placeholder:text-warm-ivory/50"
              : "text-ink-black placeholder:text-stone-grey/70"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap pl-4 transition-colors cursor-pointer ${
            dark
              ? "text-warm-ivory hover:text-warm-ivory/70"
              : "text-ink-black hover:text-deep-oxblood"
          }`}
        >
          {status === "loading" ? "…" : cta}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 text-[10px] uppercase tracking-wider ${
            dark ? "text-warm-ivory/80" : "text-deep-oxblood"
          }`}
        >
          Something went wrong — please try again, or write to{" "}
          <a
            href={`mailto:studio@ninod.space?subject=${encodeURIComponent("Reservation list")}&body=${encodeURIComponent(`Please add ${email || "me"} to the reservation list (${source}).`)}`}
            className="underline underline-offset-2 normal-case"
          >
            studio@ninod.space
          </a>
        </p>
      )}
    </form>
  );
}
