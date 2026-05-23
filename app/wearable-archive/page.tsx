import Link from "next/link";
import Image from "next/image";

interface WearableItem {
  id: string;
  archiveNo: string;
  title: string;
  sourceArtwork: string;
  year: string;
  material: string;
  size: string;
  editionSize: string;
  availability: string;
  image: string;
}

const wearables: WearableItem[] = [
  {
    id: "wearable-001",
    archiveNo: "01",
    title: "Proscenium Fragment",
    sourceArtwork: "Shadows of the Proscenium (2026)",
    year: "2026",
    material: "100% Mulberry Silk Twill (18 Momme), hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 50, numbered with certificate",
    availability: "Available by inquiry",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide1.png",
  },
  {
    id: "wearable-002",
    archiveNo: "02",
    title: "Theatrical Figure",
    sourceArtwork: "Theatrical Echoes (2025)",
    year: "2025",
    material: "100% Mulberry Silk Twill (18 Momme), hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 50, numbered with certificate",
    availability: "Available by inquiry",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide2.png",
  },
  {
    id: "wearable-003",
    archiveNo: "03",
    title: "Gestural Arc",
    sourceArtwork: "Gestural Silence (2026)",
    year: "2026",
    material: "100% Mulberry Silk Twill (18 Momme), hand-rolled edges",
    size: "90 × 90 cm",
    editionSize: "Limited edition of 50, numbered with certificate",
    availability: "Available by inquiry",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide3.png",
  },
];

export default function WearableArchivePage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* Intro Header */}
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">Editions</span>
          <span className="h-[1px] w-12 bg-stone-grey/30" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Wearable Silk Archive</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-ink-black leading-tight">
          The Wearable Archive
        </h1>
        <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
          The Wearable Archive transforms approved fragments of original paintings into limited-edition wearable works. Created to be worn, preserved, and collected, each silk carré acts as a precise, mobile artistic signal, carrying the tactile spirit of Nino Devdariani’s canvases into daily motion.
        </p>
      </div>

      {/* Spacious Curated Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {wearables.map((item) => (
          <div key={item.id} className="flex flex-col space-y-6 group">
            {/* Image Box (Strict aspect ratio 4:5 as required by Wearable Brief) */}
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-grey border border-stone-grey/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              {/* Archive Seal Badge */}
              <div className="absolute top-4 left-4 z-20 bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/25 py-1 px-3 text-[9px] uppercase tracking-widest text-ink-black font-medium">
                No. {item.archiveNo}
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-lg text-ink-black tracking-wide leading-snug">
                  {item.title}
                </h3>
                <span className="text-[10px] text-stone-grey tracking-widest font-sans">{item.year}</span>
              </div>
              
              <div className="text-[11px] text-stone-grey font-sans uppercase tracking-widest space-y-1.5 border-t border-stone-grey/10 pt-3">
                <p><span className="text-[9px] text-stone-grey/75 font-semibold">SOURCE PAINTING:</span> {item.sourceArtwork}</p>
                <p><span className="text-[9px] text-stone-grey/75 font-semibold">EDITION:</span> {item.editionSize}</p>
                <p><span className="text-[9px] text-stone-grey/75 font-semibold">MATERIAL:</span> {item.material}</p>
                <p><span className="text-[9px] text-stone-grey/75 font-semibold">DIMENSIONS:</span> {item.size}</p>
              </div>

              {/* Inquiry Trigger */}
              <div className="pt-2 border-t border-stone-grey/10">
                <Link
                  href={`/acquire?interest=The%20Wearable%20Archive&item=${encodeURIComponent("Carré No. " + item.archiveNo + " - " + item.title)}`}
                  className="inline-block text-xs uppercase tracking-[0.2em] font-medium py-2 text-ink-black/80 hover:text-deep-oxblood transition-colors duration-300 w-full"
                >
                  Inquire &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
