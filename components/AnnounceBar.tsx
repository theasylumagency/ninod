import Link from "next/link";
import Countdown from "@/components/Countdown";
import { EDITIONS_OPEN, LAUNCH_DATE_LABEL } from "@/data/launch";

export default function AnnounceBar() {
  return (
    <div className="w-full bg-deep-oxblood text-warm-ivory">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-6 text-[10px] uppercase tracking-[0.2em] md:px-12">
        {EDITIONS_OPEN ? (
          <Link
            href="/wearable-archive"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span>Edition 01 — Open now</span>
            <span className="hidden opacity-70 sm:inline">·</span>
            <span className="hidden underline underline-offset-2 sm:inline">
              Claim your number
            </span>
          </Link>
        ) : (
          <Link
            href="/#waitlist"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span>Edition 01 — Opening {LAUNCH_DATE_LABEL}</span>
            <span className="hidden opacity-70 md:inline">
              <Countdown variant="compact" />
            </span>
            <span className="opacity-70">·</span>
            <span className="underline underline-offset-2">Join for first access</span>
          </Link>
        )}
      </div>
    </div>
  );
}
