import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visualArchiveEntries } from "@/data/visualArchive";
import {
  WorkMeta,
  SelectedDetails,
  WhatToNotice,
  ArchiveRelations,
} from "@/components/VisualArchive";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Statically pre-generate paths for optimal build-time pre-rendering
export async function generateStaticParams() {
  return visualArchiveEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = visualArchiveEntries.find((e) => e.slug === slug);

  if (!entry) {
    return {
      title: "Archive Entry Not Found — Nino D",
    };
  }

  return {
    title: `${entry.title} — Visual Archive — Nino D`,
    description: `${entry.title} (${entry.subtitle}). Nino Devdariani's painted world archive details.`,
  };
}

export default async function VisualArchiveEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = visualArchiveEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  const {
    title,
    subtitle,
    archiveNote,
    image,
    details,
    whatToNotice,
    archiveRelations,
    wearableConnection,
    meta,
    order,
    tags,
  } = entry;

  const numString = order.toString().padStart(2, "0");
  const acquireUrl = `/acquire?interest=Original%20Work&item=${encodeURIComponent(title)}`;

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black min-h-screen overflow-x-hidden antialiasedScroll">
      
      {/* 1. Header Section (Title + Subtitle + Micro Info) */}
      <section className="w-full pt-12 md:pt-20 pb-8 md:pb-12 bg-warm-ivory">
        <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-6">
          {/* Breadcrumb & Label */}
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-grey font-medium">
            <Link href="/visual-archive" className="hover:text-deep-oxblood transition-colors">
              Visual Archive
            </Link>
            <span>/</span>
            <span className="text-deep-oxblood font-semibold">Plate {numString}</span>
          </div>

          {/* Staggered Heading Title Block */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-ink-black leading-tight">
              {title}
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-deep-oxblood tracking-wide font-light max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Large Artwork Viewport (Uncropped, Large and Clean) */}
      <section className="w-full bg-warm-ivory py-4 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/11] overflow-hidden bg-paper-grey border border-stone-grey/15 group">
          {/* LCP Candidate Image - Fetch Priority High, No Lazy Load */}
          <Image
            src={image.src}
            alt={`${title} — full uncropped artwork canvas by Nino Devdariani`}
            fill
            priority
            className="object-contain p-4 md:p-8 transition-transform duration-[4000ms] ease-out scale-100"
            sizes="100vw"
          />
          {/* Subtle Fine Art Overlay */}
          <div className="absolute inset-0 bg-ink-black/[0.02] mix-blend-overlay pointer-events-none" />
          <div className="absolute bottom-4 left-4 bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/15 px-3 py-1 text-[8.5px] uppercase tracking-widest text-stone-grey font-medium">
            Original Canvas Viewport
          </div>
        </div>
      </section>

      {/* 3. Catalog Text Grid (Archive Note + Registry Metadata Sidebar) */}
      <section className="w-full bg-warm-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Poetry & Interpretation Note */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Exhibition Note</span>
              <span className="h-[1px] w-12 bg-stone-grey/25" />
            </div>
            <div className="font-cormorant text-base md:text-lg text-ink-black/85 leading-relaxed space-y-6 font-light text-justify">
              <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-deep-oxblood first-letter:font-bold first-letter:leading-none">
                {archiveNote}
              </p>
            </div>
          </div>

          {/* Right Column — Registry Details, Observation, Relations */}
          <div className="col-span-1 lg:col-span-5 space-y-10 lg:pl-4">
            {/* Registry Info */}
            <WorkMeta meta={meta} tags={tags} />
            
            {/* Checklist of Observations */}
            {whatToNotice && <WhatToNotice points={whatToNotice} />}

            {/* Sibling Relations */}
            {archiveRelations && <ArchiveRelations relations={archiveRelations} />}
          </div>
        </div>
      </section>

      {/* 4. Zoom Close-up details */}
      {details && <SelectedDetails details={details} mainImageSrc={image.src} />}

      {/* 5. Wearable Bridge Translation */}
      {wearableConnection && wearableConnection.enabled && (
        <section className="w-full bg-paper-grey py-16 md:py-24 border-b border-stone-grey/20">
          <div className="mx-auto max-w-5xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Descriptive Column */}
            <div className="col-span-1 md:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Archival Edition</span>
                <span className="h-[1px] w-8 bg-stone-grey/25" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink-black uppercase tracking-wider">
                Wearable Connection
              </h3>
              <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-sans">
                {wearableConnection.text || "Selected fragments from Nino Devdariani’s paintings may be translated into limited silk editions — not as simple reproductions, but as wearable fragments of a larger visual archive."}
              </p>
              <div className="pt-3">
                <Link
                  href={wearableConnection.href || "/wearable-archive"}
                  className="inline-block bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3 px-8 hover:bg-deep-oxblood transition-colors duration-300"
                >
                  {wearableConnection.ctaLabel || "Explore Wearable Archive"} &rarr;
                </Link>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="col-span-1 md:col-span-4 relative aspect-square overflow-hidden bg-warm-ivory border border-stone-grey/15 group">
              <Image
                src={image.src}
                alt={`Wearable silk carré mockup detail from ${title}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-[3000ms] scale-100 group-hover:scale-[1.03] grayscale-[30%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-ink-black/5 mix-blend-overlay" />
            </div>
          </div>
        </section>
      )}

      {/* 6. Collector Acquisition Inquiry CTA */}
      <section className="w-full bg-warm-ivory py-16 md:py-24 max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
        <div className="flex items-center gap-3 justify-center">
          <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Acquisition Desk</span>
          <span className="h-[1px] w-8 bg-stone-grey/25" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-ink-black uppercase tracking-wider font-light">
          Inquire About This Work
        </h3>
        <p className="text-xs text-stone-grey leading-relaxed tracking-wide max-w-xl mx-auto font-sans">
          For availability, private viewings, archive documentation, or collector acquisition inquiries, contact the studio representatives directly.
        </p>
        <div className="pt-4">
          <Link
            href={acquireUrl}
            className="inline-block border border-stone-grey/40 text-ink-black text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-10 hover:border-ink-black hover:bg-ink-black hover:text-warm-ivory transition-all duration-300"
          >
            Begin an Inquiry &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
