"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "done" | "error";

export default function WaitlistForm({
  source = "site",
  theme = "light",
}: {
  source?: string;
  theme?: "light" | "dark";
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
        body: JSON.stringify({ email: email.trim(), source }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p
        className={`font-serif italic text-base md:text-lg ${
          dark ? "text-warm-ivory" : "text-deep-oxblood"
        }`}
      >
        You are on the list. We will write to you before Edition 01 opens.
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
          {status === "loading" ? "…" : "Join"}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 text-[10px] uppercase tracking-wider ${
            dark ? "text-warm-ivory/80" : "text-deep-oxblood"
          }`}
        >
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
