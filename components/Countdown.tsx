"use client";

import { useEffect, useState } from "react";
import { LAUNCH_DATE } from "@/data/launch";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function calc(): Remaining {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  const c = Math.max(0, diff);
  return {
    days: Math.floor(c / 86400000),
    hours: Math.floor((c % 86400000) / 3600000),
    minutes: Math.floor((c % 3600000) / 60000),
    seconds: Math.floor((c % 60000) / 1000),
    done: diff <= 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({
  variant = "full",
  theme = "light",
}: {
  variant?: "full" | "compact";
  theme?: "light" | "dark";
}) {
  // Stays null until mounted to avoid a server/client hydration mismatch.
  const [t, setT] = useState<Remaining | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (variant === "compact") {
    return (
      <span className="tabular-nums tracking-wider" suppressHydrationWarning>
        {t ? `${t.days}d : ${pad(t.hours)}h : ${pad(t.minutes)}m` : ""}
      </span>
    );
  }

  const dark = theme === "dark";
  const cell = (value: number | null, label: string) => (
    <div className="flex flex-col items-center min-w-[48px]">
      <span
        className={`font-serif text-3xl md:text-4xl tabular-nums ${
          dark ? "text-warm-ivory" : "text-ink-black"
        }`}
        suppressHydrationWarning
      >
        {value === null ? "--" : pad(value)}
      </span>
      <span
        className={`text-[9px] uppercase tracking-[0.25em] mt-2 ${
          dark ? "text-warm-ivory/55" : "text-stone-grey"
        }`}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-start gap-5 md:gap-8">
      {cell(t ? t.days : null, "Days")}
      {cell(t ? t.hours : null, "Hours")}
      {cell(t ? t.minutes : null, "Min")}
      {cell(t ? t.seconds : null, "Sec")}
    </div>
  );
}
