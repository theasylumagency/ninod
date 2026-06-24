import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the Nino D platform, original artworks, and wearable editions by Nino Devdariani.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-2xl mx-auto space-y-8 font-sans">
      <h1 className="font-serif text-3xl uppercase tracking-wider">Terms of Service</h1>
      <p className="text-xs text-stone-grey leading-relaxed">
        All original canvases and wearable editions displayed on this platform are intellectual property of Nino Devdariani and Nino D. Unauthorised duplication, reproduction, or commercial resale of the artwork details is strictly prohibited under international copyright laws.
      </p>
      <p className="text-xs text-stone-grey leading-relaxed">
        Limited editions are numbered and logged in our studio registry. Possession of a physical certificate of authenticity is required to verify the provenance of any edition.
      </p>
    </div>
  );
}
