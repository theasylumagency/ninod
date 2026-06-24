"use client";

import Link from "next/link";
import Image from "next/image";
import { useVault, formatEur } from "@/components/VaultContext";

export default function VaultPage() {
  const { items, total, remove, hydrated } = useVault();

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden min-h-[70vh]">
      <section className="w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="space-y-4 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">00</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
              Reserved Editions
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.2em] text-ink-black">
            The Vault
          </h1>
          <p className="text-xs text-stone-grey leading-relaxed tracking-wide max-w-md">
            Editions you have claimed are held here. Nothing is final until you secure them. Each scarf is a numbered piece from a permanently closed edition of 100.
          </p>
        </div>

        {/* Empty state */}
        {hydrated && items.length === 0 && (
          <div className="border border-stone-grey/20 bg-paper-grey/30 py-20 px-6 flex flex-col items-center text-center space-y-6">
            <p className="font-cormorant italic text-xl md:text-2xl text-ink-black/75">
              The Vault is empty.
            </p>
            <p className="text-xs text-stone-grey max-w-xs leading-relaxed">
              Claim an edition from the Wearable Archive to reserve your number.
            </p>
            <Link
              href="/wearable-archive"
              className="inline-block bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300"
            >
              Explore The Wearable Archive
            </Link>
          </div>
        )}

        {/* Items */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* List */}
            <div className="lg:col-span-2 space-y-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-stone-grey/15 pb-8 last:border-none"
                >
                  <div className="relative w-24 h-32 md:w-28 md:h-36 shrink-0 overflow-hidden bg-paper-grey border border-stone-grey/10">
                    <Image
                      src={item.image}
                      alt={`Edition ${item.archiveNo} — ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                    <div className="absolute top-2 left-2 bg-ink-black text-warm-ivory py-1 px-2 text-[7px] uppercase tracking-[0.2em]">
                      No. {item.archiveNo}
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-stone-grey">
                        Edition {item.archiveNo}
                      </p>
                      <h3 className="font-serif text-lg md:text-xl uppercase tracking-wider text-ink-black">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-stone-grey tracking-wide">
                        100% Heavy Silk Twill · 90 × 90 cm · Numbered with certificate
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                      <span className="text-ink-black font-semibold tracking-wider text-sm">
                        {formatEur(item.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        className="text-[9px] uppercase tracking-[0.2em] text-stone-grey hover:text-deep-oxblood transition-colors cursor-pointer"
                      >
                        Release
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside className="lg:col-span-1">
              <div className="border border-stone-grey/20 bg-paper-grey/30 p-8 space-y-6 lg:sticky lg:top-28">
                <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium text-stone-grey">
                  Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-grey uppercase tracking-wider">
                      {items.length} {items.length === 1 ? "Edition" : "Editions"}
                    </span>
                    <span className="text-ink-black font-medium">{formatEur(total)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-stone-grey/80 uppercase tracking-wider">
                    <span>Shipping &amp; duties</span>
                    <span>Calculated at next step</span>
                  </div>
                </div>
                <div className="flex justify-between border-t border-stone-grey/20 pt-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-ink-black">
                    Subtotal
                  </span>
                  <span className="text-base font-semibold tracking-wider text-ink-black">
                    {formatEur(total)}
                  </span>
                </div>
                <Link
                  href="/vault/secure"
                  className="block text-center bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-6 hover:bg-deep-oxblood transition-colors duration-300"
                >
                  Secure Your Edition
                </Link>
                <p className="text-[9px] text-stone-grey/80 leading-relaxed tracking-wide text-center">
                  Each numbered piece is final once secured and is never reissued.
                </p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
