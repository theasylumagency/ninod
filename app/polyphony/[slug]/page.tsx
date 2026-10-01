import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  POLYPHONY,
  catalogueNo,
  formatDimensions,
  formatDimensionsIn,
  formatUsd,
  getPolyphonyWork,
  polyphonyWorks,
} from "@/data/polyphony";
import { visualArchiveEntries } from "@/data/visualArchive";
import { workItem } from "@/lib/analytics";
import { ExhibitionLine, StatusMark } from "@/components/Polyphony";
import { TrackOnMount, TrackedLink } from "@/components/PolyphonyClient";
import InquiryForm from "@/components/InquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = "https://ninod.space";

export async function generateStaticParams() {
  return polyphonyWorks.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const w = getPolyphonyWork(slug);
  if (!w) return { title: "Work not found" };

  const path = `${POLYPHONY.path}/${w.slug}`;
  const description = `${w.title} (${w.year}) by Nino Devdariani — ${w.medium.toLowerCase()}, ${formatDimensions(w)}. ${w.status === "sold" ? "Sold." : `${formatUsd(w.priceUsd)}.`} From Polyphony, on view at ${POLYPHONY.exhibition.name}, ${POLYPHONY.exhibition.datesLabel}.`;

  return {
    title: `${w.title} — Polyphony`,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${w.title}, ${w.year} — Nino Devdariani`,
      description,
      url: path,
      images: [{ url: w.image.src, width: w.image.width, height: w.image.height, alt: `${w.title} by Nino Devdariani` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${w.title}, ${w.year} — Nino Devdariani`,
      description,
      images: [w.image.src],
    },
  };
}

export default async function PolyphonyWorkPage({ params }: PageProps) {
  const { slug } = await params;
  const w = getPolyphonyWork(slug);
  if (!w) notFound();

  const idx = polyphonyWorks.findIndex((x) => x.slug === w.slug);
  const prev = polyphonyWorks[(idx - 1 + polyphonyWorks.length) % polyphonyWorks.length];
  const next = polyphonyWorks[(idx + 1) % polyphonyWorks.length];
  const archive = w.archiveSlug ? visualArchiveEntries.find((e) => e.slug === w.archiveSlug) : undefined;
  const pageUrl = `${siteUrl}${POLYPHONY.path}/${w.slug}`;
  const ratio = w.image.width / w.image.height;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VisualArtwork",
        "@id": `${pageUrl}#artwork`,
        name: w.title,
        url: pageUrl,
        image: `${siteUrl}${w.image.src}`,
        description: w.note,
        dateCreated: String(w.year),
        artMedium: "Acrylic, ink and mixed technique",
        artworkSurface: "Paper",
        height: { "@type": "Distance", name: `${w.heightCm} cm` },
        width: { "@type": "Distance", name: `${w.widthCm} cm` },
        creator: { "@type": "Person", name: "Nino Devdariani", url: `${siteUrl}/about` },
        isPartOf: { "@type": "Collection", name: "Polyphony", url: `${siteUrl}${POLYPHONY.path}` },
        offers: {
          "@type": "Offer",
          price: w.priceUsd,
          priceCurrency: "USD",
          availability: w.status === "available" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
          url: pageUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Polyphony", item: `${siteUrl}${POLYPHONY.path}` },
          { "@type": "ListItem", position: 3, name: w.title, item: pageUrl },
        ],
      },
    ],
  };

  const row = (label: string, value: React.ReactNode) => (
    <div className="flex justify-between gap-6 py-2 border-b border-stone-grey/10">
      <dt className="text-stone-grey uppercase text-[9px] tracking-[0.2em] pt-0.5">{label}</dt>
      <dd className="text-right text-ink-black">{value}</dd>
    </div>
  );

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TrackOnMount
        key={w.slug}
        event="view_item"
        params={{ currency: "USD", value: w.priceUsd, items: [workItem(w, idx)] }}
      />

      {/* ---------- Breadcrumb + title ---------- */}
      <section className="w-full pt-10 md:pt-16 pb-6 md:pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-grey font-medium">
            <Link href={POLYPHONY.path} className="hover:text-deep-oxblood transition-colors">Polyphony</Link>
            <span>/</span>
            <span className="text-deep-oxblood font-semibold">No. {catalogueNo(w.no)}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
              {w.title}
              <span className="text-stone-grey font-light">, {w.year}</span>
            </h1>
            <StatusMark status={w.status} />
          </div>
        </div>
      </section>

      {/* ---------- The work — never cropped ---------- */}
      <section className="w-full px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-paper-grey border border-stone-grey/15 p-4 sm:p-8 md:p-12 flex items-center justify-center">
          <div className="relative w-full" style={{ maxWidth: `min(100%, calc(72vh * ${ratio.toFixed(3)}))` }}>
            <Image
              src={w.image.src}
              alt={`${w.title}, ${w.year} — ${w.medium.toLowerCase()} by Nino Devdariani`}
              width={w.image.width}
              height={w.image.height}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto shadow-[0_1px_18px_rgba(11,11,11,0.08)]"
              sizes="(max-width: 1280px) 100vw, 1180px"
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-3 text-[10px] uppercase tracking-[0.2em] text-stone-grey">
          <span>Nino Devdariani · {formatDimensions(w)}</span>
          <a href={w.image.src} target="_blank" rel="noopener noreferrer" className="hover:text-deep-oxblood transition-colors">
            Full size &#8599;
          </a>
        </div>
      </section>

      {/* ---------- Details + inquiry ---------- */}
      <section className="w-full py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <p className="font-cormorant italic text-xl md:text-2xl text-ink-black/85 leading-relaxed">{w.note}</p>

            <dl className="text-xs">
              {row("Artist", "Nino Devdariani")}
              {row("Title", w.title)}
              {row("Year", w.year)}
              {row("Medium", w.medium)}
              {row(
                "Size",
                <>
                  {formatDimensions(w)}
                  <span className="block text-stone-grey">{formatDimensionsIn(w)}</span>
                </>
              )}
              {row("Collection", `Polyphony, No. ${catalogueNo(w.no)}`)}
              {row(
                "Price",
                <span className="font-serif text-lg text-deep-oxblood">
                  {w.status === "sold" ? "Sold" : formatUsd(w.priceUsd)}
                </span>
              )}
              {row("Availability", <StatusMark status={w.status} />)}
            </dl>

            <div className="space-y-2 border-t border-stone-grey/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-stone-grey">On view</p>
              <ExhibitionLine />
            </div>

            {archive && (
              <div className="bg-paper-grey/40 border border-stone-grey/15 p-5 space-y-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-stone-grey">Also in the Visual Archive</p>
                <p className="text-xs text-stone-grey leading-relaxed">
                  {w.archiveTitle && w.archiveTitle !== w.title
                    ? `This work has an archive entry under the title “${archive.title}” — with details, themes and what to notice.`
                    : "This work has its own archive entry — with details, themes and what to notice."}
                </p>
                <TrackedLink
                  href={`/visual-archive/${archive.slug}`}
                  event="archive_link_click"
                  params={{ from: "polyphony_work", items: [workItem(w, idx)] }}
                  className="inline-block text-[10px] uppercase tracking-[0.25em] font-semibold text-ink-black hover:text-deep-oxblood transition-colors"
                >
                  Read the archive entry &rarr;
                </TrackedLink>
              </div>
            )}
          </div>

          <div id="inquire" className="lg:col-span-7 scroll-mt-28 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">
                {w.status === "sold" ? "Similar works" : "Inquire about this work"}
              </span>
              <span className="h-[1px] w-8 bg-stone-grey/25" />
            </div>
            {w.status === "sold" ? (
              <p className="text-xs text-stone-grey leading-relaxed">
                This work has found its collector. To ask about similar works or commissions,{" "}
                <Link href={`${POLYPHONY.path}#inquire`} className="text-ink-black underline underline-offset-2">write to the studio</Link>.
              </p>
            ) : (
              <InquiryForm work={w} source="polyphony_work" />
            )}
          </div>
        </div>
      </section>

      {/* ---------- Prev / next ---------- */}
      <nav aria-label="More works" className="w-full border-t border-stone-grey/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center gap-6 py-8">
          <Link href={`${POLYPHONY.path}/${prev.slug}`} className="group text-left">
            <span className="block text-[9px] uppercase tracking-[0.25em] text-stone-grey">&larr; Previous</span>
            <span className="font-serif text-base md:text-lg group-hover:text-deep-oxblood transition-colors">{prev.title}</span>
          </Link>
          <Link
            href={`${POLYPHONY.path}#works`}
            className="hidden md:block text-center text-[10px] uppercase tracking-[0.25em] text-ink-black hover:text-deep-oxblood transition-colors"
          >
            All ten works
          </Link>
          <Link href={`${POLYPHONY.path}/${next.slug}`} className="group text-right">
            <span className="block text-[9px] uppercase tracking-[0.25em] text-stone-grey">Next &rarr;</span>
            <span className="font-serif text-base md:text-lg group-hover:text-deep-oxblood transition-colors">{next.title}</span>
          </Link>
        </div>
      </nav>

      {/* ---------- Thumbnail strip ---------- */}
      <section className="w-full bg-paper-grey/40 border-t border-stone-grey/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-10">
          <ul className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
            {polyphonyWorks.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`${POLYPHONY.path}/${x.slug}`}
                  aria-label={x.title}
                  aria-current={x.slug === w.slug ? "page" : undefined}
                  className={`block relative aspect-square overflow-hidden border transition-colors ${
                    x.slug === w.slug ? "border-deep-oxblood" : "border-transparent hover:border-ink-black/40"
                  }`}
                >
                  <Image src={x.image.src} alt="" fill className="object-cover" sizes="120px" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
