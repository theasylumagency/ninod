import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Inside Nino Devdariani's working studio: materials, method, selected exhibitions, press and representation.",
  alternates: { canonical: "/studio" },
};

// TODO (George): confirm exact exhibition titles, venues, years and cities.
// All were group exhibitions (no solo shows). Placeholder copy below — refine later.
const exhibitions = [
  { year: "2024", title: "Group Exhibition", location: "Tbilisi, Georgia" },
  { year: "2023", title: "Group Exhibition", location: "Tbilisi, Georgia" },
  { year: "2022", title: "Group Exhibition", location: "Tbilisi, Georgia" },
];

const practiceFacts = [
  { label: "Based in", value: "Tbilisi, Georgia" },
  { label: "Medium", value: "Acrylic, marker, ink on canvas" },
  { label: "Approach", value: "Self-taught — no preliminary sketch" },
  { label: "Focus", value: "Dense figurative micro-worlds" },
];

export default function StudioPage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">

      {/* ==========================================
          INTRO — THE STUDIO
          ========================================== */}
      <section className="w-full border-b border-stone-grey/15 px-6 py-16 md:px-12 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">The Studio</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Practice & Process</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-ink-black leading-tight">
            Inside the Studio
          </h1>
          <p className="font-serif italic text-base md:text-lg text-stone-grey leading-relaxed tracking-wide max-w-xl">
            &ldquo;The studio is where memory becomes material — where figures, fragments, and movement take a physical body before they ever leave the canvas.&rdquo;
          </p>
        </div>
      </section>

      {/* ==========================================
          STUDIO SPACE — VISUAL + PRACTICE
          ========================================== */}
      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Large Studio Visual */}
          <div className="col-span-1 md:col-span-7 relative aspect-[4/3] overflow-hidden safari-clip-fix bg-paper-grey border border-stone-grey/10">
            <Image
              src="/images/homepage/studio.png"
              alt="Nino Devdariani working in her studio in Tbilisi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          {/* Right — Working Method */}
          <div className="col-span-1 md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey border-b border-stone-grey/15 pb-2">
                The Working Method
              </h2>
              <p className="text-xs md:text-[13px] text-stone-grey leading-relaxed tracking-wide">
                Nino Devdariani works directly — acrylic, markers, and ink, applied without strict preliminary sketches or academic correction. A line is not erased; it becomes part of the composition. A change in direction opens another path rather than marking a mistake.
              </p>
              <p className="text-xs md:text-[13px] text-stone-grey leading-relaxed tracking-wide">
                The result is a dense, populated surface: figures, faces, symbols, and fragments of memory that fill the canvas edge to edge. From this practice, selected works extend beyond the wall into limited silk editions under Nino D.
              </p>
            </div>

            {/* Practice facts */}
            <div className="space-y-0 pt-2">
              {practiceFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-baseline gap-4 border-b border-stone-grey/15 py-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-stone-grey font-medium">
                    {fact.label}
                  </span>
                  <span className="font-serif text-sm text-ink-black text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SELECTED EXHIBITIONS
          ========================================== */}
      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">01</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Exhibitions</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-black leading-tight tracking-wide mt-6">
              Selected Exhibitions
            </h2>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide mt-4 max-w-xs">
              Nino&apos;s work has been shown in several group exhibitions. A selected list appears here.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-0">
            {exhibitions.map((ex, i) => (
              <div
                key={i}
                className="flex justify-between items-start gap-6 border-b border-stone-grey/15 py-5"
              >
                <span className="font-sans font-medium text-ink-black/50 text-xs w-14 shrink-0">{ex.year}</span>
                <div className="flex-grow flex flex-col">
                  <span className="font-serif text-base text-ink-black">{ex.title}</span>
                  <span className="text-[10px] text-stone-grey uppercase tracking-wider mt-1">{ex.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PRESS & REPRESENTATION
          ========================================== */}
      <section className="w-full px-6 py-20 md:px-12 md:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="col-span-1 md:col-span-7 relative aspect-[16/10] overflow-hidden safari-clip-fix bg-paper-grey">
            <Image
              src="/images/about/studio-process.png"
              alt="Nino Devdariani in the studio with painting materials"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectPosition: "56% 50%" }}
            />
          </div>

          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">02</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Press & Representation</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-ink-black leading-tight tracking-wide">
              Visit & inquire.
            </h2>
            <p className="text-xs md:text-[13px] text-stone-grey leading-relaxed tracking-wide">
              For representation queries, press, acquisitions, or private viewing appointments, please contact the studio at{" "}
              <a href="mailto:studio@ninod.space" className="text-deep-oxblood hover:underline">
                studio@ninod.space
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                href="/acquire"
                className="inline-block bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3 px-8 hover:bg-deep-oxblood transition-colors duration-300"
              >
                Inquire &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
