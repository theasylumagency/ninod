"use client";

import Link from "next/link";
import Image from "next/image";
import { type VisualArchiveEntry } from "@/data/visualArchive";

/* ==========================================
   1. VisualArchiveHero
   ========================================== */
export function VisualArchiveHero() {
  return (
    <section className="w-full bg-warm-ivory border-b border-stone-grey/25 py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Editorial Text Column */}
        <div className="col-span-1 md:col-span-6 space-y-6 md:pr-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">00 / Catalog</span>
            <span className="h-[1px] w-10 bg-stone-grey/30" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-grey font-medium">Nino D Studio</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide text-ink-black uppercase leading-[1.05]">
            Visual <br className="hidden lg:inline" />Archive
          </h1>
          <p className="text-xs text-stone-grey uppercase tracking-[0.15em] font-medium border-t border-stone-grey/15 pt-4">
            Seven selected works from Nino Devdariani’s painted world.
          </p>
          <p className="text-sm font-cormorant text-ink-black/80 leading-relaxed max-w-lg italic font-light pt-2">
            &ldquo;These paintings are not quiet surfaces. They are theatres, archives, costumes, memories, jokes, wounds, and coded histories — dense visual worlds where figures gather, transform, misbehave, and refuse to stay still.&rdquo;
          </p>
        </div>

        {/* Right Cropped Artwork Detail (LCP Candidate) */}
        <div className="col-span-1 md:col-span-6">
          <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-paper-grey border border-stone-grey/10 group">
            <Image
              src="/images/visual-archive/theatre-of-figures.jpeg"
              alt="Theatre of Figures painting fragment, serving as the visual gateway to Nino D's archive"
              fill
              priority
              className="object-cover transition-transform duration-[4000ms] cubic-bezier(0.25, 1, 0.5, 1) scale-100 group-hover:scale-[1.03] grayscale-[20%] group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Fine Art Overlay */}
            <div className="absolute inset-0 bg-ink-black/5 mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-4 right-4 bg-warm-ivory/90 backdrop-blur-sm border border-stone-grey/25 py-1 px-3 text-[9px] uppercase tracking-widest text-ink-black/80">
              Fragment: Theatre of Figures
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   2. VisualArchiveIntro
   ========================================== */
export function VisualArchiveIntro() {
  return (
    <section className="w-full bg-warm-ivory py-16 md:py-24 border-b border-stone-grey/15">
      <div className="mx-auto max-w-3xl px-6 md:px-12 text-center space-y-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-grey font-medium block">
          00 / Intro Note
        </span>
        <div className="h-[1px] w-12 bg-deep-oxblood/35 mx-auto" />
        <h2 className="font-serif italic text-2xl md:text-3xl text-ink-black leading-relaxed max-w-2xl mx-auto font-light">
          The Visual Archive begins with seven works selected by the artist as key entries into her practice.
        </h2>
        <div className="space-y-6 text-xs text-stone-grey leading-relaxed max-w-xl mx-auto tracking-wide font-sans text-justify md:text-center">
          <p>
            Each work stands alone, yet together they reveal the recurring logic of Nino Devdariani’s world: layered figures, theatrical compositions, textile memory, cultural fragments, historical echoes, humor, excess, and private mythology.
          </p>
          <p>
            The archive is designed to be entered slowly — first through image, then through detail, and finally through the stories hidden inside the painted surface.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   3. ArchiveWorkPlate
   ========================================== */
interface ArchiveWorkPlateProps {
  entry: VisualArchiveEntry;
}

export function ArchiveWorkPlate({ entry }: ArchiveWorkPlateProps) {
  const { order, slug, title, subtitle, tags, image } = entry;
  const numString = order.toString().padStart(2, "0");

  // Determine editorial styling rhythm based on order
  let plateClasses = "w-full py-16 md:py-24 border-b border-stone-grey/15 bg-warm-ivory";
  let containerClasses = "mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center";
  let imageColClasses = "col-span-1 md:col-span-7";
  let textColClasses = "col-span-1 md:col-span-5 space-y-6";
  let imageAspect = "aspect-[4/3]";

  if (order === 1) {
    // 01 — large horizontal archive plate
    imageColClasses = "col-span-1 md:col-span-8";
    textColClasses = "col-span-1 md:col-span-4 space-y-6 md:pl-6";
    imageAspect = "aspect-[16/10]";
  } else if (order === 2) {
    // 02 — very large featured archive plate (swapped layout, text left, image right)
    imageColClasses = "col-span-1 md:col-span-7 md:order-2";
    textColClasses = "col-span-1 md:col-span-5 md:order-1 space-y-6 md:pr-10";
    imageAspect = "aspect-[4/3] md:aspect-[16/11]";
  } else if (order === 3) {
    // 03 — asymmetrical pair (left column of the pair)
    plateClasses = "w-full py-16 md:py-20 md:border-b-0 border-b border-stone-grey/15 md:pb-10 bg-warm-ivory md:col-span-6";
    containerClasses = "flex flex-col space-y-6";
    imageColClasses = "w-full";
    textColClasses = "w-full space-y-4 px-2";
    imageAspect = "aspect-[3/4]"; // Portrait
  } else if (order === 4) {
    // 04 — asymmetrical pair (right column of the pair, shifted down slightly)
    plateClasses = "w-full py-16 md:py-20 border-b border-stone-grey/15 md:pb-10 bg-warm-ivory md:col-span-6 md:mt-16";
    containerClasses = "flex flex-col space-y-6";
    imageColClasses = "w-full";
    textColClasses = "w-full space-y-4 px-2";
    imageAspect = "aspect-[1/1] md:aspect-[3/4]"; // Portrait or Square
  } else if (order === 5) {
    // 05 — full-width darker or quieter section (uses paper-grey card/panel styling)
    plateClasses = "w-full py-20 md:py-28 border-b border-stone-grey/15 bg-paper-grey/40";
    containerClasses = "mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center";
    imageColClasses = "col-span-1 md:col-span-8";
    textColClasses = "col-span-1 md:col-span-4 space-y-6";
    imageAspect = "aspect-[16/9]"; // Cinematic landscape
  } else if (order === 6) {
    // 06 — wide breathing section (text left, image right, generous space)
    imageColClasses = "col-span-1 md:col-span-7 md:order-2";
    textColClasses = "col-span-1 md:col-span-5 md:order-1 space-y-6 md:pr-12";
    imageAspect = "aspect-[16/10]";
  } else if (order === 7) {
    // 07 — final cinematic block
    imageColClasses = "col-span-1 md:col-span-7";
    textColClasses = "col-span-1 md:col-span-5 space-y-6 md:pl-10";
    imageAspect = "aspect-[4/4]"; // Final dramatic square
  }

  return (
    <div className={plateClasses}>
      <div className={containerClasses}>
        {/* Artwork Image Frame */}
        <div className={imageColClasses}>
          <Link href={`/visual-archive/${slug}`} className="block group">
            <div className={`relative ${imageAspect} overflow-hidden bg-paper-grey border border-stone-grey/10 transition-colors duration-500 hover:border-deep-oxblood/35`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-[3000ms] ease-out scale-100 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
              />
              <div className="absolute inset-0 bg-ink-black/0 transition-colors duration-700 group-hover:bg-ink-black/5 mix-blend-overlay" />
            </div>
          </Link>
        </div>

        {/* Text and Details Block */}
        <div className={textColClasses}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-serif text-[11px] uppercase tracking-[0.2em] text-deep-oxblood font-semibold">
                {numString} / Archive Plate
              </span>
              <span className="h-[1px] w-6 bg-stone-grey/25" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink-black tracking-wide leading-tight group">
              <Link href={`/visual-archive/${slug}`} className="hover:text-deep-oxblood transition-colors duration-300">
                {title}
              </Link>
            </h3>
            <p className="font-serif italic text-sm text-stone-grey tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-paper-grey/50 border border-stone-grey/15 py-1 px-3 text-[9px] uppercase tracking-widest text-stone-grey font-medium rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Catalog Entry Link */}
          <div className="pt-4 border-t border-stone-grey/10">
            <Link
              href={`/visual-archive/${slug}`}
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold py-2 text-ink-black hover:text-deep-oxblood transition-colors duration-300 group"
            >
              <span>View Archive Entry</span>
              <span className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   4. ArchiveBridge
   ========================================== */
export function ArchiveBridge() {
  return (
    <section className="w-full bg-paper-grey py-20 md:py-28 border-b border-stone-grey/20">
      <div className="mx-auto max-w-5xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Descriptive Column */}
        <div className="col-span-1 md:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Archival Translation</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-ink-black uppercase tracking-wider leading-tight">
            From Visual Archive <br />to Wearable Archive
          </h3>
          <p className="font-serif italic text-lg text-deep-oxblood/85 tracking-wide">
            Some fragments leave the painted surface.
          </p>
          <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-sans max-w-xl">
            Selected details from Nino Devdariani’s works are translated into limited silk editions — not as simple commercial reproductions, but as wearable fragments of a larger, living visual archive that dialogue directly with human movement.
          </p>
          <div className="pt-4">
            <Link
              href="/wearable-archive"
              className="inline-block bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 hover:bg-deep-oxblood transition-colors duration-300"
            >
              Explore the Wearable Archive &rarr;
            </Link>
          </div>
        </div>

        {/* Artistic Still Column */}
        <div className="col-span-1 md:col-span-5 relative aspect-[4/5] overflow-hidden bg-warm-ivory border border-stone-grey/15 group">
          <Image
            src="/images/homepage/hero/hero-right.png"
            alt="Wearable silk carré draped beautifully in motion"
            fill
            loading="lazy"
            className="object-cover transition-transform duration-[3000ms] scale-100 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-ink-black/5 mix-blend-overlay" />
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   5. InquiryCTA
   ========================================== */
interface InquiryCTAProps {
  customTitle?: string;
  customText?: string;
  itemOfInterest?: string;
}

export function InquiryCTA({ customTitle, customText, itemOfInterest }: InquiryCTAProps) {
  const baseTitle = customTitle || "Private Viewings & Inquiries";
  const baseText = customText || "For original works, commissions, archive access, collaborations, and collector inquiries, contact the studio directly.";
  const acquireUrl = itemOfInterest 
    ? `/acquire?interest=Original%20Work&item=${encodeURIComponent(itemOfInterest)}`
    : "/acquire";

  return (
    <section className="w-full bg-warm-ivory py-16 md:py-24 max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
      <div className="flex items-center gap-3 justify-center">
        <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Collector Office</span>
        <span className="h-[1px] w-8 bg-stone-grey/25" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-ink-black uppercase tracking-wider font-light">
        {baseTitle}
      </h3>
      <p className="text-xs text-stone-grey leading-relaxed tracking-wide max-w-xl mx-auto font-sans">
        {baseText}
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
  );
}

/* ==========================================
   6. WorkMeta
   ========================================== */
interface WorkMetaProps {
  meta: VisualArchiveEntry["meta"];
  tags: string[];
}

export function WorkMeta({ meta, tags }: WorkMetaProps) {
  if (!meta) return null;

  return (
    <div className="bg-paper-grey/30 border border-stone-grey/15 p-6 space-y-6 text-xs font-sans tracking-wide">
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-semibold border-b border-stone-grey/15 pb-2">
          Archive Registry
        </h4>
        <div className="space-y-3 font-sans text-ink-black">
          <div className="flex justify-between py-1 border-b border-stone-grey/10">
            <span className="text-stone-grey uppercase text-[9px] tracking-wider">Artist</span>
            <span className="font-medium">{meta.artist || "Nino Devdariani"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-stone-grey/10">
            <span className="text-stone-grey uppercase text-[9px] tracking-wider">Medium</span>
            <span className="font-medium">{meta.medium || "Acrylic and ink on canvas"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-stone-grey/10">
            <span className="text-stone-grey uppercase text-[9px] tracking-wider">Year</span>
            <span className="font-medium italic">{meta.year || "Year to be confirmed"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-stone-grey/10">
            <span className="text-stone-grey uppercase text-[9px] tracking-wider">Dimensions</span>
            <span className="font-medium">{meta.dimensions || "Dimensions to be confirmed"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-stone-grey/10">
            <span className="text-stone-grey uppercase text-[9px] tracking-wider">Status</span>
            <span className="font-serif text-deep-oxblood font-semibold tracking-wider uppercase text-[10px]">
              {meta.status || "Original work"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-semibold border-b border-stone-grey/15 pb-2">
          Thematic Keywords
        </h4>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-warm-ivory border border-stone-grey/15 py-1 px-2.5 text-[8.5px] uppercase tracking-widest text-stone-grey font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   7. SelectedDetails
   ========================================== */
interface SelectedDetailsProps {
  details: VisualArchiveEntry["details"];
  mainImageSrc: string;
}

export function SelectedDetails({ details, mainImageSrc }: SelectedDetailsProps) {
  if (!details || details.length === 0) return null;

  return (
    <section className="w-full bg-warm-ivory py-16 md:py-24 border-t border-b border-stone-grey/15">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12 md:space-y-16">
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">Paint Detail</span>
            <span className="h-[1px] w-8 bg-stone-grey/25" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-ink-black uppercase tracking-wider font-light">
            Selected Details
          </h3>
        </div>

        <div className="space-y-16 md:space-y-24">
          {details.map((detail, index) => {
            const isEven = index % 2 === 0;

            // Since we don't have separate crop files, we use the main image beautifully focused, or direct representation
            // On desktop: alternate image on left/text on right, and text on left/image on right.
            const textCol = (
              <div className="space-y-4 md:space-y-6">
                <span className="font-serif text-[11px] text-deep-oxblood font-medium uppercase tracking-widest">
                  Detail Closeup 0{index + 1}
                </span>
                <h4 className="font-serif text-xl md:text-2xl text-ink-black leading-tight">
                  {detail.title}
                </h4>
                <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-sans max-w-lg">
                  {detail.text}
                </p>
              </div>
            );

            const imageCol = (
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-grey border border-stone-grey/10 group">
                <Image
                  src={detail.image?.src || mainImageSrc}
                  alt={detail.image?.alt || `Painting detail mockup representing ${detail.title}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-[3000ms] scale-100 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-ink-black/5 mix-blend-overlay" />
                <div className="absolute top-4 left-4 bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/15 px-2 py-0.5 text-[8px] tracking-[0.2em] uppercase font-medium">
                  Detail View
                </div>
              </div>
            );

            return (
              <div 
                key={detail.title} 
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                {/* Responsive desktop alternation */}
                {isEven ? (
                  <>
                    <div className="col-span-1 md:col-span-6">{imageCol}</div>
                    <div className="col-span-1 md:col-span-6">{textCol}</div>
                  </>
                ) : (
                  <>
                    {/* On Mobile: render imageCol first, then textCol. On Desktop: textCol first, then imageCol */}
                    <div className="col-span-1 md:col-span-6 md:order-2">{imageCol}</div>
                    <div className="col-span-1 md:col-span-6 md:order-1">{textCol}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   8. WhatToNotice
   ========================================== */
interface WhatToNoticeProps {
  points: string[];
}

export function WhatToNotice({ points }: WhatToNoticeProps) {
  if (!points || points.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-semibold border-b border-stone-grey/15 pb-2">
        What to Observe
      </h4>
      <ul className="space-y-3 font-sans text-xs text-stone-grey tracking-wide leading-relaxed">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-deep-oxblood font-serif text-[10px] select-none pt-0.5">&bull;</span>
            <span className="text-ink-black/85">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================================
   9. ArchiveRelations
   ========================================== */
interface ArchiveRelationsProps {
  relations: VisualArchiveEntry["archiveRelations"];
}

export function ArchiveRelations({ relations }: ArchiveRelationsProps) {
  if (!relations || relations.length === 0) return null;

  return (
    <div className="space-y-4 pt-4 border-t border-stone-grey/15">
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-semibold">
        Archive Relations
      </h4>
      <div className="space-y-4">
        {relations.map((rel) => (
          <div key={rel.slug} className="space-y-1 font-sans text-xs">
            <Link 
              href={`/visual-archive/${rel.slug}`} 
              className="font-serif text-sm text-ink-black hover:text-deep-oxblood font-medium underline underline-offset-4 decoration-stone-grey/30 hover:decoration-deep-oxblood transition-colors inline-block"
            >
              {rel.title}
            </Link>
            <p className="text-stone-grey text-[11px] leading-relaxed tracking-wide">
              {rel.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
