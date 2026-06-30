"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { visualArchiveEntries, type VisualArchiveEntry } from "@/data/visualArchive";

/* ==========================================
   1. VisualArchiveHero — The Catalogue Vitrine
   ========================================== */
export function VisualArchiveHero() {
  const [active, setActive] = useState(0);
  const entry = visualArchiveEntries[active];
  const plateNo = String(active + 1).padStart(2, "0");
  const total = String(visualArchiveEntries.length).padStart(2, "0");

  return (
    <section className="w-full bg-warm-ivory border-b border-stone-grey/20 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[82vh]">

      {/* ---------- LEFT RAIL — whisper editorial ---------- */}
      <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between gap-12 lg:gap-10 px-6 md:px-12 lg:px-16 py-12 lg:py-16">

        {/* Top — quiet brand line */}
        <div className="flex items-baseline justify-between archive-reveal">
          <span className="font-serif text-[12px] md:text-[13px] tracking-[0.4em] uppercase text-ink-black">
            Nino&nbsp;D
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-grey font-medium">
            Catalogue 00
          </span>
        </div>

        {/* Middle — the void carries it */}
        <div className="max-w-sm">
          <span
            className="block text-[10px] tracking-[0.34em] uppercase text-deep-oxblood font-semibold archive-reveal"
            style={{ animationDelay: "340ms" }}
          >
            The Painted Source
          </span>

          <h1
            className="mt-5 font-serif text-4xl md:text-5xl leading-[0.96] tracking-tight text-ink-black archive-reveal"
            style={{ animationDelay: "440ms" }}
          >
            Visual<br />Archive
          </h1>

          <p
            className="mt-7 font-serif text-base md:text-lg leading-relaxed text-ink-black/80 font-light archive-reveal"
            style={{ animationDelay: "580ms" }}
          >
            The source from which everything begins — the painted world of Nino Devdariani.
          </p>

          <p
            className="mt-4 font-cormorant italic text-sm md:text-base leading-relaxed text-stone-grey archive-reveal"
            style={{ animationDelay: "680ms" }}
          >
            No archive can fully contain it. This is an entrance.
          </p>

          <div className="mt-8 archive-reveal" style={{ animationDelay: "780ms" }}>
            <a
              href="#archive-selection"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-ink-black border-b border-ink-black/40 pb-1.5 transition-colors duration-300 hover:text-deep-oxblood hover:border-deep-oxblood focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-oxblood focus-visible:ring-offset-4 focus-visible:ring-offset-warm-ivory"
            >
              <span>Enter the Archive</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Bottom — quiet catalogue contents */}
        <nav
          aria-label="Catalogue contents"
          className="archive-reveal"
          style={{ animationDelay: "920ms" }}
        >
          <span className="block text-[9px] tracking-[0.3em] uppercase text-stone-grey/80 pb-4 border-b border-ink-black/10">
            Contents — Eight Works
          </span>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 pt-4">
            {visualArchiveEntries.map((item, index) => {
              const isActive = index === active;
              const n = String(index + 1).padStart(2, "0");
              return (
                <li key={item.id}>
                  <Link
                    href={`/visual-archive/${item.slug}`}
                    aria-current={isActive ? "true" : undefined}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group flex items-baseline gap-2.5 py-0.5 focus:outline-none"
                  >
                    <span
                      className={`font-serif text-[10px] tracking-[0.15em] tabular-nums transition-colors duration-300 ${isActive ? "text-deep-oxblood" : "text-stone-grey group-hover:text-deep-oxblood"
                        }`}
                    >
                      {n}
                    </span>
                    <span
                      className={`font-serif text-[13px] md:text-sm leading-tight transition-colors duration-300 ${isActive
                          ? "text-deep-oxblood"
                          : "text-ink-black/75 group-hover:text-ink-black group-focus-visible:text-deep-oxblood"
                        }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ---------- RIGHT — monumental full-bleed work ---------- */}
      <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[60vh] lg:min-h-full bg-paper-grey overflow-hidden">
        {/* Ceremonial image reveal */}
        <div
          className="absolute inset-0 archive-reveal archive-reveal-slow"
          style={{ animationDelay: "180ms" }}
        >
          <Image
            key={entry.id}
            src={entry.image.src}
            alt={entry.image.alt}
            fill
            priority={active === 0}
            loading={active === 0 ? "eager" : "lazy"}
            className="object-cover plate-fade"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>

        {/* Click target — enter the currently shown work */}
        <Link
          href={`/visual-archive/${entry.slug}`}
          aria-label={`View archive entry ${plateNo} — ${entry.title}`}
          className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warm-ivory"
        />

        {/* Museum wall label */}
        <figcaption
          className="absolute left-5 bottom-5 md:left-8 md:bottom-8 z-20 pointer-events-none max-w-[80%] archive-reveal"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="bg-warm-ivory/90 backdrop-blur-sm border border-ink-black/10 px-4 py-3 md:px-5 md:py-4">
            <p className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-stone-grey">
              {entry.meta?.artist ?? "Nino Devdariani"}
            </p>
            <p className="font-serif italic text-base md:text-lg text-ink-black mt-1">
              {entry.title}
              {entry.meta?.year && entry.meta.year !== "Year to be confirmed" && (
                <span className="text-stone-grey not-italic">, {entry.meta.year}</span>
              )}
            </p>
            <p className="text-[10px] md:text-[11px] text-stone-grey tracking-wide mt-1">
              {entry.meta?.medium ?? "Acrylic and ink on canvas"}
              <span className="mx-2 text-stone-grey/50">·</span>
              Plate {plateNo} / {total}
            </p>
          </div>
        </figcaption>
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
          00 / Archive Statement
        </span>
        <div className="h-[1px] w-12 bg-deep-oxblood/35 mx-auto" />
        <h2 className="font-serif italic text-2xl md:text-3xl text-ink-black leading-relaxed max-w-2xl mx-auto font-light">
          The Visual Archive begins with eight works selected by the artist as key entries into her practice.
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
  const { order, slug, title, subtitle, archiveNote, tags, image } = entry;
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
  } else if (order === 8) {
    // 08 — closing archive plate
    imageColClasses = "col-span-1 md:col-span-7 md:order-2";
    textColClasses = "col-span-1 md:col-span-5 md:order-1 space-y-6 md:pr-10";
    imageAspect = "aspect-[4/5]";
  }

  return (
    <div className={plateClasses}>
      <div className={containerClasses}>
        {/* Artwork Image Frame */}
        <div className={imageColClasses}>
          <Link href={`/visual-archive/${slug}`} className="block group">
            <div className={`relative w-full ${imageAspect} overflow-hidden safari-clip-fix bg-paper-grey border border-stone-grey/10 transition-colors duration-500 hover:border-deep-oxblood/35`}>
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

          {/* Archive Note */}
          {archiveNote && (
            <p className="text-xs text-stone-grey/90 leading-relaxed tracking-wide font-sans">
              {archiveNote}
            </p>
          )}

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
   3.5 CinematicInterlude — Archive Film
   The painting leaves the wall. The bridge between
   Visual Archive and Wearable Archive.
   ========================================== */
export function CinematicInterlude() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Attempt a quiet, muted autoplay unless the visitor prefers reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setReduceMotion(true);
      return; // Leave it paused on the designed poster frame.
    }

    const attempt = video.play();
    if (attempt && typeof attempt.then === "function") {
      attempt.catch(() => {
        // Autoplay blocked — the poster + play affordance stay in place.
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section
      aria-labelledby="archive-film-title"
      className="w-full bg-warm-ivory border-b border-stone-grey/15 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">
              02 / Archive Film
            </span>
            <span className="h-[1px] w-10 bg-stone-grey/25" />
          </div>
          <h2
            id="archive-film-title"
            className="font-serif text-3xl md:text-4xl text-ink-black tracking-wide leading-tight mt-4"
          >
            Paintings that leave the wall.
          </h2>
          <div className="space-y-4 mt-5 text-xs text-stone-grey leading-relaxed tracking-wide font-sans max-w-xl">
            <p>Some works remain on the wall. Others begin to move.</p>
            <p>
              This short archive film imagines the moment when a painted world
              crosses into fabric, body, gesture, and return.
            </p>
          </div>
        </div>

        {/* Cinematic frame */}
        <figure className="m-0">
          <div className="relative w-full aspect-video overflow-hidden bg-warm-ivory border border-stone-grey/25 shadow-sm safari-clip-fix">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Archive film — a painted world crosses into fabric, body, and gesture, and sometimes returns to the archive"
              className="w-full h-full object-cover"
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
              }}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/sometimes_return.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Designed poster / play affordance — shown before first play
                (covers blocked autoplay and prefers-reduced-motion). */}
            {!hasStarted && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play the archive film"
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-warm-ivory/92 backdrop-blur-sm transition-opacity duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-oxblood focus-visible:ring-inset"
              >
                <span className="block text-[10px] tracking-[0.34em] uppercase text-deep-oxblood font-semibold">
                  Archive Film
                </span>
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink-black/30 text-ink-black transition-colors duration-300 hover:border-deep-oxblood hover:text-deep-oxblood">
                  {/* play triangle */}
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" aria-hidden="true">
                    <path d="M0 0v20l18-10L0 0z" />
                  </svg>
                </span>
              </button>
            )}

            {/* Persistent, subtle pause/play control once the film has started */}
            {hasStarted && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause the archive film" : "Play the archive film"}
                className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center bg-warm-ivory/85 backdrop-blur-sm border border-ink-black/15 text-ink-black transition-colors duration-300 hover:text-deep-oxblood hover:border-deep-oxblood focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-oxblood"
              >
                {isPlaying ? (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
                    <rect x="0" y="0" width="4" height="14" />
                    <rect x="8" y="0" width="4" height="14" />
                  </svg>
                ) : (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
                    <path d="M0 0v14l12-7L0 0z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Manifesto caption — quiet, important, not oversized */}
          <figcaption className="mt-6 font-cormorant italic text-lg md:text-xl text-ink-black/85 leading-relaxed tracking-wide max-w-md">
            Paintings that leave the wall,
            <br />
            and sometimes return.
          </figcaption>
        </figure>

        {reduceMotion && (
          <p className="sr-only">
            The archive film is paused because your system requests reduced
            motion. Use the play control to watch it.
          </p>
        )}
      </div>
    </section>
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
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">03 / Wearable Translation</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-ink-black uppercase tracking-wider leading-tight">
            From Visual Archive <br />to Wearable Archive
          </h3>
          <p className="font-serif italic text-lg text-deep-oxblood/85 tracking-wide">
            Some fragments leave the painted surface.
          </p>
          <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-sans max-w-xl">
            Selected details from Nino Devdariani’s works may be translated into limited silk editions — not as reproductions, but as wearable fragments of a larger visual archive.
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
        <div className="col-span-1 md:col-span-5 relative w-full aspect-[4/5] overflow-hidden safari-clip-fix bg-warm-ivory border border-stone-grey/15 group">
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
  ctaHref?: string;
}

export function InquiryCTA({ customTitle, customText, itemOfInterest, ctaHref }: InquiryCTAProps) {
  const baseTitle = customTitle || "Private Viewings & Inquiries";
  const baseText = customText || "For original works, archive access, collaborations, commissions, and collector inquiries, contact the studio directly.";
  const acquireUrl = ctaHref
    ? ctaHref
    : itemOfInterest
      ? `/acquire?interest=Original%20Work&item=${encodeURIComponent(itemOfInterest)}`
      : "/acquire";

  return (
    <section className="w-full bg-warm-ivory py-16 md:py-24 max-w-3xl mx-auto px-6 md:px-12 text-center space-y-6">
      <div className="flex items-center gap-3 justify-center">
        <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">04 / Private Access</span>
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
}

export function SelectedDetails({ details }: SelectedDetailsProps) {
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
            const hasImage = Boolean(detail.image);

            const textCol = (
              <div className="space-y-4 md:space-y-6">
                <span className="font-serif text-[11px] text-deep-oxblood font-medium uppercase tracking-widest">
                  Selected Detail 0{index + 1}
                </span>
                <h4 className="font-serif text-xl md:text-2xl text-ink-black leading-tight">
                  {detail.title}
                </h4>
                <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-sans max-w-lg">
                  {detail.text}
                </p>
              </div>
            );

            const imageCol = hasImage ? (
              <div className="relative w-full aspect-[16/10] overflow-hidden safari-clip-fix bg-paper-grey border border-stone-grey/10 group">
                <Image
                  src={detail.image!.src}
                  alt={detail.image!.alt}
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
            ) : null;

            if (!hasImage) {
              return (
                <div
                  key={detail.title}
                  className="max-w-3xl border-t border-stone-grey/15 pt-8"
                >
                  {textCol}
                </div>
              );
            }

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
