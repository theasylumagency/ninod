import Link from "next/link";
import Image from "next/image";

interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  image: string;
  availability: "Available by inquiry" | "Private collection" | "Reserved" | "Not available" | "Commission inquiry";
}

const artworks: Artwork[] = [
  {
    id: "work-001",
    title: "Shadows of the Proscenium",
    year: "2026",
    medium: "Mixed media on canvas",
    size: "100 × 100 cm",
    image: "/images/homepage/origin-painting.png",
    availability: "Available by inquiry",
  },
  {
    id: "work-002",
    title: "Theatrical Echoes",
    year: "2025",
    medium: "Oil on Belgian Linen",
    size: "120 × 120 cm",
    image: "/images/homepage/painting-theatrical.png",
    availability: "Reserved",
  },
  {
    id: "work-003",
    title: "Gestural Silence",
    year: "2026",
    medium: "Mixed media on canvas",
    size: "140 × 90 cm",
    image: "/images/homepage/painting-gestures.png",
    availability: "Available by inquiry",
  },
];

export default function WorksPage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* Intro Header */}
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">Archive</span>
          <span className="h-[1px] w-12 bg-stone-grey/30" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Original Paintings</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-ink-black leading-tight">
          Works
        </h1>
        <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
          A curation of original works and canvas archives by Nino Devdariani. Each piece establishes a language of figures, emotional memory, and gestural movement, forming the structural foundation of the brand’s visual universe.
        </p>
      </div>

      {/* Spacious Curated Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {artworks.map((art) => (
          <div key={art.id} className="flex flex-col space-y-6 group">
            {/* Image Box */}
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-grey border border-stone-grey/10">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              {/* Subtle Availability Badge */}
              <div className="absolute top-4 left-4 z-20 bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/25 py-1 px-3 text-[9px] uppercase tracking-widest text-ink-black font-medium">
                {art.availability}
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-4 px-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-lg text-ink-black tracking-wide leading-snug">
                  {art.title}
                </h3>
                <span className="text-[10px] text-stone-grey tracking-widest font-sans">{art.year}</span>
              </div>
              
              <div className="text-[11px] text-stone-grey font-sans uppercase tracking-widest space-y-1 border-t border-stone-grey/10 pt-3">
                <p>{art.medium}</p>
                <p>{art.size}</p>
              </div>

              {/* Inquiry Trigger */}
              <div className="pt-2 border-t border-stone-grey/10">
                <Link
                  href={`/acquire?interest=Original%20Work&item=${encodeURIComponent(art.title)}`}
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
