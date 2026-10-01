import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  POLYPHONY,
  STUDIO_CONTACT,
  formatUsd,
  inquiryMessage,
  polyphonyWorks,
  whatsappHref,
} from "@/data/polyphony";
import { visualArchiveEntries } from "@/data/visualArchive";
import { workItem } from "@/lib/analytics";
import { ExhibitionLine, PriceList, WorkCard } from "@/components/Polyphony";
import { TrackOnMount, TrackedAnchor } from "@/components/PolyphonyClient";
import InquiryForm from "@/components/InquiryForm";

const siteUrl = "https://ninod.space";
const description = `Polyphony — ten works on paper by Nino Devdariani, on view at ${POLYPHONY.exhibition.name}, ${POLYPHONY.exhibition.venue} ${POLYPHONY.exhibition.city}, ${POLYPHONY.exhibition.datesLabel}. Prices and availability.`;
const hero = polyphonyWorks.find((w) => w.slug === "daydreaming-n2") ?? polyphonyWorks[0];

export const metadata: Metadata = {
  title: "Polyphony — Works on Paper",
  description,
  alternates: { canonical: POLYPHONY.path },
  openGraph: {
    type: "website",
    title: "Polyphony — Nino Devdariani",
    description,
    url: POLYPHONY.path,
    images: [{ url: hero.image.src, width: hero.image.width, height: hero.image.height, alt: `${hero.title} — Polyphony` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyphony — Nino Devdariani",
    description,
    images: [hero.image.src],
  },
};

export default function PolyphonyPage() {
  const ex = POLYPHONY.exhibition;
  const minPrice = Math.min(...polyphonyWorks.map((w) => w.priceUsd));
  const inArchive = polyphonyWorks
    .filter((w) => w.archiveSlug)
    .map((w) => ({ work: w, entry: visualArchiveEntries.find((e) => e.slug === w.archiveSlug) }))
    .filter((x) => x.entry);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}${POLYPHONY.path}#page`,
        url: `${siteUrl}${POLYPHONY.path}`,
        name: "Polyphony — Nino Devdariani",
        description,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: polyphonyWorks.length,
          itemListElement: polyphonyWorks.map((w, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteUrl}${POLYPHONY.path}/${w.slug}`,
            name: w.title,
          })),
        },
      },
      {
        "@type": "ExhibitionEvent",
        name: `${ex.name} — Polyphony by Nino Devdariani`,
        startDate: ex.startDate,
        endDate: ex.endDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: `${ex.venue} (Merchandise Mart)`,
          address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
        },
        performer: { "@type": "Person", name: "Nino Devdariani", url: `${siteUrl}/about` },
        url: `${siteUrl}${POLYPHONY.path}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Polyphony", item: `${siteUrl}${POLYPHONY.path}` },
        ],
      },
    ],
  };

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TrackOnMount
        event="view_item_list"
        params={{ item_list_id: "polyphony", item_list_name: "Polyphony", items: polyphonyWorks.map((w, i) => workItem(w, i)) }}
      />

      {/* ---------- 1. Hero ---------- */}
      <section className="w-full border-b border-stone-grey/20 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[78vh]">
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between gap-10 px-6 md:px-12 lg:px-16 py-12 lg:py-16">
          <div className="flex items-baseline justify-between archive-reveal">
            <span className="font-serif text-[12px] md:text-[13px] tracking-[0.4em] uppercase text-ink-black">Nino&nbsp;D</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-grey font-medium">Collection · 2026</span>
          </div>

          <div className="max-w-md">
            <span className="block text-[10px] tracking-[0.34em] uppercase text-deep-oxblood font-semibold archive-reveal" style={{ animationDelay: "300ms" }}>
              Works on paper
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[0.95] tracking-tight archive-reveal" style={{ animationDelay: "420ms" }}>
              {POLYPHONY.title}
            </h1>
            <p className="mt-6 font-serif text-base md:text-lg leading-relaxed text-ink-black/80 font-light archive-reveal" style={{ animationDelay: "560ms" }}>
              {POLYPHONY.lede}
            </p>
            <p className="mt-3 font-cormorant italic text-base md:text-lg leading-relaxed text-stone-grey archive-reveal" style={{ animationDelay: "660ms" }}>
              Many voices, one crowded world.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 archive-reveal" style={{ animationDelay: "780ms" }}>
              <a
                href="#works"
                className="inline-block bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 hover:bg-deep-oxblood transition-colors duration-300"
              >
                View the works
              </a>
              <a
                href="#inquire"
                className="text-[11px] tracking-[0.25em] uppercase text-ink-black border-b border-ink-black/40 pb-1.5 hover:text-deep-oxblood hover:border-deep-oxblood transition-colors"
              >
                Inquire
              </a>
            </div>
          </div>

          {/* Exhibition card */}
          <div className="archive-reveal border-t border-ink-black/10 pt-5 space-y-2" style={{ animationDelay: "900ms" }}>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-stone-grey/80">On view</span>
            <ExhibitionLine />
            <p className="text-[11px] text-stone-grey tracking-wide">{ex.openingLabel}</p>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[56vh] lg:min-h-full bg-paper-grey overflow-hidden">
          <div className="absolute inset-0 archive-reveal archive-reveal-slow" style={{ animationDelay: "150ms" }}>
            <Image
              src={hero.image.src}
              alt={`${hero.title}, ${hero.year} — from Polyphony by Nino Devdariani`}
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <Link href={`${POLYPHONY.path}/${hero.slug}`} aria-label={`View ${hero.title}`} className="absolute inset-0 z-10" />
          <figcaption className="absolute left-5 bottom-5 md:left-8 md:bottom-8 z-20 pointer-events-none">
            <div className="bg-warm-ivory/90 backdrop-blur-sm border border-ink-black/10 px-4 py-3">
              <p className="text-[9px] tracking-[0.28em] uppercase text-stone-grey">Nino Devdariani</p>
              <p className="font-serif italic text-base md:text-lg text-ink-black mt-1">
                {hero.title}<span className="not-italic text-stone-grey">, {hero.year}</span>
              </p>
            </div>
          </figcaption>
        </div>
      </section>

      {/* ---------- 2. Statement ---------- */}
      <section className="w-full py-16 md:py-24 border-b border-stone-grey/15">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-grey font-medium block">00 / On Polyphony</span>
          <div className="h-[1px] w-12 bg-deep-oxblood/35 mx-auto" />
          <p className="font-serif italic text-2xl md:text-3xl text-ink-black leading-relaxed font-light">
            {POLYPHONY.statement[0]}
          </p>
          <p className="text-xs md:text-sm text-stone-grey leading-relaxed tracking-wide max-w-xl mx-auto">
            {POLYPHONY.statement[1]}
          </p>
        </div>
      </section>

      {/* ---------- 3. The works ---------- */}
      <section id="works" className="w-full scroll-mt-24 border-b border-stone-grey/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10 md:pb-14 border-b border-stone-grey/15">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">01 / The Works</span>
                <span className="h-[1px] w-8 bg-stone-grey/25" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-wider leading-tight mt-3">Ten works</h2>
            </div>
            <p className="text-xs text-stone-grey tracking-wide max-w-sm md:text-right">
              {POLYPHONY.medium}, 2023–2026. Prices from {formatUsd(minPrice)}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 md:gap-y-20 pt-12 md:pt-16">
            {polyphonyWorks.map((w, i) => (
              <WorkCard key={w.slug} work={w} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. Price list ---------- */}
      <section id="price-list" className="w-full bg-paper-grey/40 border-b border-stone-grey/15 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-20 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">02 / Price List</span>
            <span className="h-[1px] w-8 bg-stone-grey/25" />
          </div>
          <PriceList />
        </div>
      </section>

      {/* ---------- 5. Also in the Visual Archive ---------- */}
      {inArchive.length > 0 && (
        <section className="w-full border-b border-stone-grey/15">
          <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">03 / From the Archive</span>
                <span className="h-[1px] w-8 bg-stone-grey/25" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight">Read the stories behind three of the works.</h2>
              <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
                Some works in Polyphony also have an entry in the Visual Archive — with details, themes and what to notice.
              </p>
            </div>
            <ul className="md:col-span-7 divide-y divide-stone-grey/15 border-y border-stone-grey/15">
              {inArchive.map(({ work, entry }) => (
                <li key={work.slug}>
                  <Link
                    href={`/visual-archive/${entry!.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-5 hover:text-deep-oxblood transition-colors"
                  >
                    <span>
                      <span className="font-serif text-lg">{entry!.title}</span>
                      {work.archiveTitle && work.archiveTitle !== work.title && (
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-stone-grey mt-1">
                          Shown in Polyphony as “{work.title}”
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey group-hover:text-deep-oxblood whitespace-nowrap">
                      Archive entry &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- 6. Visit & inquire ---------- */}
      <section id="inquire" className="w-full scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">04 / Visit &amp; Inquire</span>
                <span className="h-[1px] w-8 bg-stone-grey/25" />
              </div>
              <h2 className="font-serif text-3xl uppercase tracking-wider leading-tight">See the works in Chicago</h2>
              <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
                To acquire or reserve a work, ask about framing and shipping, or arrange to meet the artist at the fair, write to the studio. Each work’s page has its own short form.
              </p>
            </div>

            <dl className="space-y-2 text-xs border-t border-stone-grey/15 pt-6">
              <dt className="text-[9px] uppercase tracking-[0.25em] text-stone-grey">{ex.name} · {ex.venue}, {ex.city}</dt>
              {ex.hours.map((h) => (
                <dd key={h.day} className="flex justify-between gap-4 border-b border-stone-grey/10 py-1.5">
                  <span>{h.day}{"note" in h && h.note ? <span className="text-stone-grey"> — {h.note}</span> : null}</span>
                  <span className="tabular-nums text-stone-grey whitespace-nowrap">{h.time}</span>
                </dd>
              ))}
              {ex.booth && <dd className="pt-2">Booth {ex.booth}</dd>}
            </dl>

            <div className="space-y-2 border-t border-stone-grey/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-stone-grey">Studio — direct</p>
              <TrackedAnchor
                href={whatsappHref(inquiryMessage(undefined, `${siteUrl}${POLYPHONY.path}`))}
                target="_blank"
                rel="noopener noreferrer"
                event="contact_click"
                params={{ method: "whatsapp", lead_source: "polyphony_collection" }}
                className="block text-sm font-serif hover:text-deep-oxblood transition-colors"
              >
                WhatsApp {STUDIO_CONTACT.phoneDisplay}
              </TrackedAnchor>
              <TrackedAnchor
                href={`mailto:${STUDIO_CONTACT.email}?subject=${encodeURIComponent("Polyphony — inquiry")}`}
                event="contact_click"
                params={{ method: "email", lead_source: "polyphony_collection" }}
                className="block text-sm font-serif hover:text-deep-oxblood transition-colors"
              >
                {STUDIO_CONTACT.email}
              </TrackedAnchor>
              <TrackedAnchor
                href={STUDIO_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                event="social_click"
                params={{ network: "instagram", placement: "polyphony_collection" }}
                className="block text-sm font-serif hover:text-deep-oxblood transition-colors"
              >
                Instagram {STUDIO_CONTACT.instagramHandle}
              </TrackedAnchor>
            </div>
          </div>

          <div className="lg:col-span-8">
            <InquiryForm source="polyphony_collection" defaultInterest="Polyphony collection" itemLabel="Polyphony collection" />
          </div>
        </div>
      </section>
    </div>
  );
}
