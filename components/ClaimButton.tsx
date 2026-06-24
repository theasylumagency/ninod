"use client";

import Link from "next/link";
import { useVault, type VaultItem } from "@/components/VaultContext";
import { EDITIONS_OPEN, LAUNCH_DATE_LABEL } from "@/data/launch";

export default function ClaimButton({ item }: { item: VaultItem }) {
  const { claim, has, hydrated } = useVault();
  const claimed = hydrated && has(item.id);

  // Pre-launch: nothing is for sale yet — drive to the waitlist instead.
  if (!EDITIONS_OPEN) {
    return (
      <div className="flex flex-col gap-3">
        <span className="text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-medium">
          Opening {LAUNCH_DATE_LABEL}
        </span>
        <Link
          href="/#waitlist"
          className="inline-block border border-ink-black text-ink-black text-[10px] font-medium tracking-[0.2em] uppercase py-3.5 px-8 hover:bg-ink-black hover:text-warm-ivory transition-colors duration-300 w-fit"
        >
          Join for first access →
        </Link>
      </div>
    );
  }

  if (claimed) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-deep-oxblood font-medium">
          Reserved in The Vault
        </span>
        <Link
          href="/vault"
          className="inline-block border border-deep-oxblood text-deep-oxblood text-[10px] font-medium tracking-[0.2em] uppercase py-3.5 px-8 hover:bg-deep-oxblood hover:text-warm-ivory transition-colors duration-300 w-fit"
        >
          View The Vault →
        </Link>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => claim(item)}
      className="inline-block border border-ink-black text-ink-black text-[10px] font-medium tracking-[0.2em] uppercase py-3.5 px-8 hover:bg-ink-black hover:text-warm-ivory transition-colors duration-300 w-fit cursor-pointer"
    >
      Claim Edition No. {item.archiveNo}
    </button>
  );
}
