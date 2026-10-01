import Image from "next/image";
import {
  POLYPHONY,
  STATUS_LABEL,
  catalogueNo,
  formatDimensions,
  formatDimensionsIn,
  formatUsd,
  polyphonyWorks,
  type PolyphonyWork,
  type WorkStatus,
} from "@/data/polyphony";
import { workItem } from "@/lib/analytics";
import { TrackedLink } from "@/components/PolyphonyClient";

/* ------------------------------------------------------------
   Status — galleries mark sold works with a red dot.
   ------------------------------------------------------------ */
export function StatusMark({ status, className = "" }: { status: WorkStatus; className?: string }) {
  const dot =
    status === "sold"
      ? "bg-[#B3261E]"
      : status === "reserved"
        ? "bg-aged-brass"
        : "border border-ink-black/50";
  return (
    <span className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-grey ${className}`}>
      <span className={`inline-block h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
}

/* ------------------------------------------------------------
   Exhibition line — one place for dates / venue / booth.
   ------------------------------------------------------------ */
export function ExhibitionLine({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ex = POLYPHONY.exhibition;
  const muted = tone === "light" ? "text-warm-ivory/70" : "text-stone-grey";
  const strong = tone === "light" ? "text-warm-ivory" : "text-ink-black";
  return (
    <p className={`text-[11px] uppercase tracking-[0.22em] leading-relaxed ${muted}`}>
      <span className={strong}>{ex.name}</span>
      <span className="mx-2 opacity-60">·</span>
      {ex.venue}, {ex.city}
      <span className="mx-2 opacity-60">·</span>
      <span className={`${strong} whitespace-nowrap`}>{ex.datesLabel}</span>
      {ex.booth && (
        <>
          <span className="mx-2 opacity-60">·</span>Booth {ex.booth}
        </>
      )}
    </p>
  );
}

/* ------------------------------------------------------------
   Work card — used on the collection page.
   The painting is never cropped: a paper-grey mat holds it.
   ------------------------------------------------------------ */
export function WorkCard({ work, index }: { work: PolyphonyWork; index: number }) {
  const href = `${POLYPHONY.path}/${work.slug}`;
  const params = { item_list_name: "Polyphony", items: [workItem(work, index)] };

  return (
    <article id={work.slug} className="group flex flex-col scroll-mt-28">
      <TrackedLink href={href} event="select_item" params={params} className="block">
        <div className="relative w-full aspect-[4/3] bg-paper-grey border border-stone-grey/15 overflow-hidden safari-clip-fix transition-colors duration-500 group-hover:border-deep-oxblood/35">
          <Image
            src={work.image.src}
            alt={`${work.title}, ${work.year} — work on paper by Nino Devdariani`}
            fill
            loading={index < 2 ? "eager" : "lazy"}
            className="object-contain p-4 md:p-6 transition-transform duration-[2500ms] ease-out group-hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {work.status !== "available" && (
            <span className="absolute top-3 right-3 bg-warm-ivory/90 border border-stone-grey/20 px-2.5 py-1">
              <StatusMark status={work.status} />
            </span>
          )}
        </div>
      </TrackedLink>

      <div className="pt-5 grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 items-baseline">
        <span className="font-serif text-[11px] tracking-[0.2em] text-deep-oxblood tabular-nums">
          {catalogueNo(work.no)}
        </span>
        <span />
        <h3 className="font-serif text-xl md:text-2xl text-ink-black leading-tight">
          <TrackedLink href={href} event="select_item" params={params} className="hover:text-deep-oxblood transition-colors">
            {work.title}
          </TrackedLink>
          <span className="text-stone-grey">, {work.year}</span>
        </h3>
        <p className="font-serif text-lg md:text-xl text-ink-black tabular-nums whitespace-nowrap">
          {work.status === "sold" ? <span className="text-stone-grey">Sold</span> : formatUsd(work.priceUsd)}
        </p>
        <p className="col-span-2 text-[11px] text-stone-grey tracking-wide mt-1">
          {work.medium} · {formatDimensions(work)}{" "}
          <span className="text-stone-grey/70">({formatDimensionsIn(work)})</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-6 border-t border-stone-grey/15 pt-4">
        <TrackedLink
          href={href}
          event="select_item"
          params={params}
          className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink-black hover:text-deep-oxblood transition-colors"
        >
          View work &rarr;
        </TrackedLink>
        {work.status !== "sold" && (
          <TrackedLink
            href={`${href}#inquire`}
            event="inquiry_click"
            params={{ lead_source: "polyphony_card", items: [workItem(work, index)] }}
            className="text-[10px] uppercase tracking-[0.25em] text-stone-grey hover:text-deep-oxblood transition-colors"
          >
            Inquire
          </TrackedLink>
        )}
        <StatusMark status={work.status} className="ml-auto" />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------
   Price list — a compact checklist, handy on a phone at the fair.
   ------------------------------------------------------------ */
export function PriceList() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-xs">
        <thead>
          <tr className="border-b border-ink-black/20 text-[9px] uppercase tracking-[0.25em] text-stone-grey">
            <th className="py-3 pr-4 font-medium">No.</th>
            <th className="py-3 pr-4 font-medium">Title</th>
            <th className="py-3 pr-4 font-medium">Year</th>
            <th className="py-3 pr-4 font-medium">Size</th>
            <th className="py-3 pr-4 font-medium text-right">Price</th>
            <th className="py-3 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {polyphonyWorks.map((w, i) => (
            <tr key={w.slug} className="border-b border-stone-grey/15 hover:bg-paper-grey/40 transition-colors">
              <td className="py-3 pr-4 font-serif text-deep-oxblood tabular-nums">{catalogueNo(w.no)}</td>
              <td className="py-3 pr-4">
                <TrackedLink
                  href={`${POLYPHONY.path}/${w.slug}`}
                  event="select_item"
                  params={{ item_list_name: "Polyphony price list", items: [workItem(w, i)] }}
                  className="font-serif text-sm text-ink-black hover:text-deep-oxblood underline-offset-4 hover:underline"
                >
                  {w.title}
                </TrackedLink>
              </td>
              <td className="py-3 pr-4 text-stone-grey tabular-nums">{w.year}</td>
              <td className="py-3 pr-4 text-stone-grey tabular-nums whitespace-nowrap">{formatDimensions(w)}</td>
              <td className="py-3 pr-4 text-right font-serif text-sm tabular-nums whitespace-nowrap">
                {w.status === "sold" ? "—" : formatUsd(w.priceUsd)}
              </td>
              <td className="py-3 text-right whitespace-nowrap">
                <StatusMark status={w.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-[10px] text-stone-grey tracking-wide">
        All works: {POLYPHONY.medium.toLowerCase()}. Prices in US dollars. Shipping is arranged individually with each collector.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------
   Homepage feature — Polyphony as the current moment.
   ------------------------------------------------------------ */
export function PolyphonyFeature() {
  if (!POLYPHONY.featured) return null;
  const lead = polyphonyWorks.find((w) => w.slug === "daydreaming-n1") ?? polyphonyWorks[0];
  const side = ["yellow-camel", "kimono"]
    .map((s) => polyphonyWorks.find((w) => w.slug === s))
    .filter(Boolean) as PolyphonyWork[];

  return (
    <section className="w-full bg-paper-grey/60 border-b border-stone-grey/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-deep-oxblood font-semibold">
              New collection
            </span>
            <span className="h-[1px] w-8 bg-stone-grey/30" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-black tracking-wide">{POLYPHONY.title}</h2>
          <p className="font-serif italic text-lg text-ink-black/80 leading-relaxed">
            {POLYPHONY.lede} Many voices, one crowded world.
          </p>
          <ExhibitionLine />
          <div className="pt-2 flex flex-wrap items-center gap-6">
            <TrackedLink
              href={POLYPHONY.path}
              event="polyphony_entry"
              params={{ placement: "homepage_feature" }}
              className="inline-block bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 hover:bg-deep-oxblood transition-colors duration-300"
            >
              View the collection &rarr;
            </TrackedLink>
            <span className="text-[10px] uppercase tracking-[0.22em] text-stone-grey">
              10 works · prices from {formatUsd(Math.min(...polyphonyWorks.map((w) => w.priceUsd)))}
            </span>
          </div>
        </div>

        <TrackedLink
          href={POLYPHONY.path}
          event="polyphony_entry"
          params={{ placement: "homepage_image" }}
          aria-label="View the Polyphony collection"
          className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-3 gap-3 md:gap-4 group"
        >
          <div className="col-span-3 relative aspect-[16/10] bg-warm-ivory border border-stone-grey/15 overflow-hidden">
            <Image
              src={lead.image.src}
              alt={`${lead.title} — from Polyphony by Nino Devdariani`}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          {side.map((w) => (
            <div key={w.slug} className="relative aspect-[4/3] bg-warm-ivory border border-stone-grey/15 overflow-hidden">
              <Image src={w.image.src} alt={`${w.title} — Polyphony`} fill className="object-cover" sizes="20vw" />
            </div>
          ))}
          <div className="relative aspect-[4/3] bg-ink-black flex items-center justify-center">
            <span className="font-serif text-warm-ivory text-xs uppercase tracking-[0.3em]">+ 7 works</span>
          </div>
        </TrackedLink>
      </div>
    </section>
  );
}

