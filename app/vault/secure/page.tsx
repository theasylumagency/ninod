"use client";

import { useState } from "react";
import Link from "next/link";
import { useVault, formatEur } from "@/components/VaultContext";

const fieldClass =
  "w-full bg-transparent border-b border-stone-grey/30 focus:border-deep-oxblood transition-colors py-2 text-sm text-ink-black placeholder:text-stone-grey/60 focus:outline-none tracking-wide";

const labelClass =
  "text-[9px] uppercase tracking-[0.25em] text-stone-grey font-medium";

export default function SecureEditionPage() {
  const { items, total, hydrated, clear } = useVault();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Payment integration pending — this is the design mockup of the flow.
    setPlaced(true);
  };

  // Confirmation view (mock)
  if (placed) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-warm-ivory">
        <span className="text-[10px] uppercase tracking-[0.3em] text-deep-oxblood font-medium mb-6">
          Reservation received
        </span>
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-ink-black mb-5 max-w-xl">
          Your edition is held.
        </h1>
        <p className="text-xs text-stone-grey leading-relaxed max-w-sm mb-10">
          This is a preview of the acquisition flow. Live payment is not yet
          connected, so no charge has been made. Once payment is enabled, this
          step will confirm your numbered edition and certificate.
        </p>
        <Link
          href="/wearable-archive"
          onClick={() => clear()}
          className="inline-block bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300"
        >
          Return to the Archive
        </Link>
      </div>
    );
  }

  // Empty Vault guard
  if (hydrated && items.length === 0) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-warm-ivory">
        <p className="font-cormorant italic text-xl text-ink-black/75 mb-6">
          There is nothing to secure.
        </p>
        <Link
          href="/wearable-archive"
          className="inline-block bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300"
        >
          Explore The Wearable Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-warm-ivory text-ink-black overflow-x-hidden min-h-[70vh]">
      <section className="w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <Link
              href="/vault"
              className="text-[10px] uppercase tracking-[0.2em] text-stone-grey hover:text-deep-oxblood transition-colors"
            >
              ← The Vault
            </Link>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.2em] text-ink-black">
            Secure Your Edition
          </h1>
          <p className="text-xs text-stone-grey leading-relaxed tracking-wide max-w-md">
            Confirm your details to secure your numbered piece. Each edition is
            registered to its collector and accompanied by a signed certificate
            of authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-12">
            {/* Contact */}
            <fieldset className="space-y-6">
              <legend className="text-[10px] uppercase tracking-[0.25em] text-ink-black font-semibold mb-6">
                01 — Collector
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className={labelClass} htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" required className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass} htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" required className={fieldClass} />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className={labelClass} htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required className={fieldClass} />
                </div>
              </div>
            </fieldset>

            {/* Shipping */}
            <fieldset className="space-y-6">
              <legend className="text-[10px] uppercase tracking-[0.25em] text-ink-black font-semibold mb-6">
                02 — Delivery
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5 md:col-span-2">
                  <label className={labelClass} htmlFor="address">Address</label>
                  <input id="address" name="address" required className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass} htmlFor="city">City</label>
                  <input id="city" name="city" required className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass} htmlFor="postal">Postal Code</label>
                  <input id="postal" name="postal" required className={fieldClass} />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className={labelClass} htmlFor="country">Country</label>
                  <input id="country" name="country" required className={fieldClass} />
                </div>
              </div>
            </fieldset>

            {/* Payment placeholder */}
            <fieldset className="space-y-4">
              <legend className="text-[10px] uppercase tracking-[0.25em] text-ink-black font-semibold mb-6">
                03 — Payment
              </legend>
              <div className="border border-dashed border-stone-grey/40 bg-paper-grey/30 p-6 text-center space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-deep-oxblood font-medium">
                  Secure payment — connecting soon
                </p>
                <p className="text-[11px] text-stone-grey leading-relaxed max-w-sm mx-auto">
                  Card, Apple Pay, and Google Pay will appear here once the
                  payment provider is connected. This is a design preview of the
                  flow; no charge is made.
                </p>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full md:w-auto bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-12 hover:bg-deep-oxblood transition-colors duration-300 cursor-pointer"
            >
              Secure Your Edition
            </button>
          </form>

          {/* Order summary */}
          <aside className="lg:col-span-1">
            <div className="border border-stone-grey/20 bg-paper-grey/30 p-8 space-y-6 lg:sticky lg:top-28">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-medium text-stone-grey">
                Your Order
              </h4>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs gap-4">
                    <span className="text-ink-black tracking-wide">
                      Edition {item.archiveNo} — {item.title}
                    </span>
                    <span className="text-ink-black font-medium whitespace-nowrap">
                      {formatEur(item.price)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-stone-grey/20 pt-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-ink-black">
                  Total
                </span>
                <span className="text-base font-semibold tracking-wider text-ink-black">
                  {formatEur(total)}
                </span>
              </div>
              <p className="text-[9px] text-stone-grey/80 leading-relaxed tracking-wide">
                Final price excludes shipping and any import duties, calculated by
                destination.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
