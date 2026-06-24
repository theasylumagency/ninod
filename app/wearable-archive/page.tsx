import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ClaimButton from "@/components/ClaimButton";
import { formatEur } from "@/lib/format";
import WaitlistSection from "@/components/WaitlistSection";
import { EDITIONS_OPEN } from "@/data/launch";

export const metadata: Metadata = {
  title: "Wearable Archive — Limited Silk Editions",
  description:
    "The Nino D Wearable Archive translates fragments of Nino Devdariani's original paintings into limited-edition silk pieces, made to be worn and collected.",
  alternates: { canonical: "/wearable-archive" },
};

interface EditionItem {
  id: string;
  archiveNo: string;
  title: string;
  sourceArtwork: string;
  year: string;
  material: string;
  size: string;
  editionSize: string;
  price: number;
  paintingImage: string;
  scarfImage: string;
}

const editions: EditionItem[] = [
  {
    id: "edition-01",
    archiveNo: "01",
    title: "ALTER EGO",
    sourceArtwork: "Alter Ego (original mixed media work, 2026)",
    year: "2026",
    material: "100% Heavy Silk Twill, hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 100, numbered with certificate",
    price: 450,
    paintingImage: "/art/alter_ego.jpg",
    scarfImage: "/images/wearable-archive/wearable1.png", // Sculptural concrete scarf
  },
  {
    id: "edition-02",
    archiveNo: "02",
    title: "DEMENTIA",
    sourceArtwork: "Dementia (original mixed media work, 2025)",
    year: "2025",
    material: "100% Heavy Silk Twill, hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 100, numbered with certificate",
    price: 450,
    paintingImage: "/art/dementia.jpg",
    scarfImage: "/scarfs/dementia.png",
  },
  {
    id: "edition-03",
    archiveNo: "03",
    title: "BEKAS DREAM",
    sourceArtwork: "Beka's Dream (original oil work, 2026)",
    year: "2026",
    material: "100% Heavy Silk Twill, hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 100, numbered with certificate",
    price: 450,
    paintingImage: "/art/bekas_dream.jpg",
    scarfImage: "/scarfs/bekas_dream.png",
  },
];

export default function WearableArchivePage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">
      
      {/* ==========================================
          SECTION 01 - HERO (Video Loop Frame)
          ========================================== */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center bg-warm-ivory">
        {/* Strict Video Frame container (80% of standard desktop screen) */}
        <div className="w-full max-w-5xl aspect-[16/9] overflow-hidden bg-paper-grey border border-stone-grey/25 relative shadow-sm">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/wearable-archive/wearable1.png"
            className="w-full h-full object-cover"
          >
            <source src="/videos/ninod-wearable.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Framing Text below Video */}
        <div className="text-center mt-12 space-y-4">
          <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.25em] text-ink-black">
            THE WEARABLE ARCHIVE
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.35em] text-stone-grey font-sans uppercase font-semibold">
            EDITIONS IN SILK
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 02 - THE MANIFESTO (Silent Text)
          ========================================== */}
      <section className="w-full py-28 md:py-40 bg-warm-ivory border-t border-b border-stone-grey/15 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-2xl font-cormorant italic text-lg md:text-xl lg:text-2xl text-ink-black/85 leading-relaxed tracking-wide">
          &ldquo;Art is not confined to the gallery wall. The Wearable Archive translates Nino Devdariani’s complex, theatrical compositions into heavy silk. These are not accessories; they are limited-edition, tactile artifacts designed for movement.&rdquo;
        </div>
      </section>

      {/* ==========================================
          SECTION 03 - THE COLLECTION (Asymmetrical Layout)
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-28 md:space-y-40">
        
        {/* Header Intro */}
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">03</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">The Collection</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-ink-black">
            Tactile Artifacts
          </h2>
          <p className="text-xs text-stone-grey leading-relaxed">
            The collection utilizes a dynamic, asymmetrical editorial layout, directly balancing the source painting against its silk translation.
          </p>
        </div>

        {/* Flowing Editions */}
        {editions.map((item, idx) => {
          const isEven = idx % 2 === 1;
          
          return (
            <div 
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-stone-grey/10 pb-20 md:pb-28 last:border-none"
            >
              {/* Painting Column (Left or Right) */}
              <div 
                className={`col-span-1 md:col-span-5 flex flex-col space-y-4 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden safari-clip-fix bg-paper-grey border border-stone-grey/10 shadow-sm group">
                  <Image
                    src={item.paintingImage}
                    alt={`Original painting source for ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/25 py-1 px-3 text-[8px] uppercase tracking-widest text-ink-black">
                    Source Painting
                  </div>
                </div>
              </div>

              {/* Scarf Column (Left or Right) */}
              <div 
                className={`col-span-1 md:col-span-7 space-y-8 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                {/* Scarf Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden safari-clip-fix bg-paper-grey border border-stone-grey/10 shadow-sm group">
                  <Image
                    src={item.scarfImage}
                    alt={`Sculptural silk Carré edition of ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-ink-black text-warm-ivory py-1.5 px-4 text-[9px] uppercase tracking-[0.25em] font-medium">
                    Archive No. {item.archiveNo}
                  </div>
                </div>

                {/* Metadata Description Block */}
                <div className="space-y-4 font-sans text-xs tracking-wider text-stone-grey px-2">
                  <div className="flex justify-between border-b border-stone-grey/10 pb-2">
                    <span className="text-[9px] text-stone-grey/65 uppercase font-medium">Title</span>
                    <span className="text-ink-black font-semibold uppercase">EDITION {item.archiveNo} — {item.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-grey/10 pb-2">
                    <span className="text-[9px] text-stone-grey/65 uppercase font-medium">Source</span>
                    <span className="text-ink-black font-medium">{item.sourceArtwork}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-grey/10 pb-2">
                    <span className="text-[9px] text-stone-grey/65 uppercase font-medium">Material</span>
                    <span className="text-ink-black font-medium">{item.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-grey/10 pb-2">
                    <span className="text-[9px] text-stone-grey/65 uppercase font-medium">Availability</span>
                    <span className="text-deep-oxblood font-semibold">{item.editionSize}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[9px] text-stone-grey/65 uppercase font-medium">Price</span>
                    <span className="text-ink-black font-semibold tracking-wider">{formatEur(item.price)}</span>
                  </div>

                  <div className="pt-4">
                    <ClaimButton
                      item={{
                        id: item.id,
                        archiveNo: item.archiveNo,
                        title: item.title,
                        image: item.scarfImage,
                        price: item.price,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </section>

      {/* ==========================================
          SECTION 04 - CRAFT & PROVENANCE
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-t border-stone-grey/15 bg-warm-ivory max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">04</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Provenance</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
              Crafted for permanence.
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              Every piece from the archive is finished with precise hand-rolled edges to preserve the structural integrity of the silk. Each edition arrives with a strictly numbered, signed Certificate of Authenticity. An archival seal records its provenance and its place within a permanently closed edition.
            </p>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="col-span-1 md:col-span-7 flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden bg-paper-grey border border-stone-grey/10 shadow-sm">
              {/* Fabric Macro Texture */}
              <Image
                src="/images/wearable-archive/wearable3.png"
                alt="Mulberry silk twill hand-rolled edge detail macro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            
            {/* Overlapping signed certificate */}
            <div className="relative w-2/3 max-w-[280px] aspect-[4/3] -mt-20 ml-auto mr-4 md:-mr-4 z-20 overflow-hidden bg-paper-grey border-4 border-warm-ivory shadow-2xl">
              <Image
                src="/images/wearable-archive/wearable2.png"
                alt="Nino D certificate of authenticity archival seal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 05 - CLOSING (phase-aware)
          ========================================== */}
      {EDITIONS_OPEN ? (
        <section className="w-full py-24 md:py-32 px-6 bg-paper-grey/35 border-t border-stone-grey/15 text-center flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">05</span>
            <span className="h-[1px] w-12 bg-stone-grey/30" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Acquisition</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black tracking-wide">
            Claim an Edition.
          </h3>
          <p className="text-xs text-stone-grey leading-relaxed tracking-wide max-w-sm">
            Each edition is claimed directly and held in The Vault until you secure it. Once an edition of 100 is closed, it is never reopened.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <Link
              href="/vault"
              className="inline-block bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300 shadow-sm"
            >
              Enter The Vault
            </Link>
            <Link
              href="/acquire?interest=The%20Wearable%20Archive"
              className="text-[10px] uppercase tracking-[0.2em] text-stone-grey hover:text-deep-oxblood transition-colors"
            >
              Or inquire about collaborations &amp; commissions
            </Link>
          </div>
        </section>
      ) : (
        <WaitlistSection
          kicker="The Wearable Archive"
          headline="Wear a fragment of the world."
          subcopy="Each edition is a numbered piece from a permanently closed run of 100. Join the list for first access before Edition 01 opens to the public."
          source="wearable-archive"
        />
      )}

    </div>
  );
}
