import { type Metadata } from "next";
import { visualArchiveEntries } from "@/data/visualArchive";
import {
  VisualArchiveHero,
  VisualArchiveIntro,
  ArchiveWorkPlate,
  CinematicInterlude,
  ArchiveBridge,
  InquiryCTA,
} from "@/components/VisualArchive";

// SEO / Metadata
export const metadata: Metadata = {
  title: "Visual Archive — Nino D",
  description: "Eight selected works from Nino Devdariani’s painted world — a living visual archive of figures, memories, symbols, textile, music, identity, adaptation, and private mythology.",
  alternates: { canonical: "/visual-archive" },
};

export default function VisualArchivePage() {
  const entry1 = visualArchiveEntries[0];
  const entry2 = visualArchiveEntries[1];
  const entry3 = visualArchiveEntries[2];
  const entry4 = visualArchiveEntries[3];
  const entry5 = visualArchiveEntries[4];
  const entry6 = visualArchiveEntries[5];
  const entry7 = visualArchiveEntries[6];
  const entry8 = visualArchiveEntries[7];

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black min-h-screen overflow-x-hidden antialiasedScroll">
      
      {/* 1. Hero */}
      <VisualArchiveHero />

      {/* 2. Intro */}
      <VisualArchiveIntro />

      {/* 3. Eight Selected Works Section */}
      <section id="archive-selection" className="w-full flex flex-col scroll-mt-24">
        {/* Title Header */}
        <div className="w-full py-12 md:py-16 bg-warm-ivory border-b border-stone-grey/15 text-center md:text-left">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">01 / Archive Selection</span>
              <span className="h-[1px] w-8 bg-stone-grey/25" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-ink-black leading-tight mt-3">
              Catalogue Plates
            </h2>
            <p className="font-sans text-xs text-stone-grey leading-relaxed tracking-wide mt-4 max-w-2xl">
              Eight works selected as entries into Nino Devdariani&apos;s visual world — not a complete catalogue, but a living index of recurring figures, symbols, memories, materials, and states of mind.
            </p>
          </div>
        </div>

        {/* 01 — large horizontal archive plate */}
        {entry1 && <ArchiveWorkPlate entry={entry1} />}

        {/* 02 — very large featured archive plate */}
        {entry2 && <ArchiveWorkPlate entry={entry2} />}

        {/* 03 & 04 — paired but asymmetrical grid */}
        <div className="w-full border-b border-stone-grey/15 bg-warm-ivory py-8 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {entry3 && <ArchiveWorkPlate entry={entry3} />}
            {entry4 && <ArchiveWorkPlate entry={entry4} />}
          </div>
        </div>

        {/* 05 — full-width darker or quieter section */}
        {entry5 && <ArchiveWorkPlate entry={entry5} />}

        {/* 06 — wide breathing section */}
        {entry6 && <ArchiveWorkPlate entry={entry6} />}

        {/* 07 — final cinematic block */}
        {entry7 && <ArchiveWorkPlate entry={entry7} />}

        {/* 08 — closing archive plate */}
        {entry8 && <ArchiveWorkPlate entry={entry8} />}
      </section>

      {/* 4. Cinematic Interlude — the painting leaves the wall */}
      <CinematicInterlude />

      {/* 5. Bridge Section — Visual Archive to Wearable Archive */}
      <ArchiveBridge />

      {/* 6. Private Viewings & Inquiries */}
      <InquiryCTA ctaHref="/inquire" />

    </div>
  );
}
