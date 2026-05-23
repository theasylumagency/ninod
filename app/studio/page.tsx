import Link from "next/link";
import Image from "next/image";

export default function StudioPage() {
  const exhibitions = [
    { year: "2025", title: "Figures of Silence", location: "Galerie L'Atelier, Paris (Solo)" },
    { year: "2024", title: "Beyond the Canvas", location: "Modern Art Space, London (Group)" },
    { year: "2023", title: "Theatrical Gestures", location: "Vanguard Contemporary, Milan (Solo)" },
    { year: "2022", title: "Memory & Movement", location: "Contemporary Gallery, Tbilisi (Solo)" },
  ];

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* Intro Header */}
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">Biography</span>
          <span className="h-[1px] w-12 bg-stone-grey/30" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">The Artist & Studio</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-ink-black leading-tight">
          Nino Devdariani
        </h1>
        <p className="text-xs text-stone-grey leading-relaxed tracking-wide font-serif italic text-base max-w-xl">
          &ldquo;I build a visual language of figures, memory, theatrical fragments, and emotional movement. The website extends that language beyond the canvas.&rdquo;
        </p>
      </div>

      {/* Grid Layout - Visual + Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Large Studio Visual */}
        <div className="col-span-1 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-paper-grey border border-stone-grey/10">
          <Image
            src="/images/homepage/studio-portrait.png"
            alt="Nino Devdariani working in her contemporary studio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>

        {/* Right Column - Narrative */}
        <div className="col-span-1 md:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey border-b border-stone-grey/15 pb-2">
              Creative Philosophy
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              Nino Devdariani’s practice centers around the transformation of psychological states and theatrical postures into physical dimensions. Working primarily with oil, canvas, and heavy linen textures, her work isolates specific silhouettes to anchor emotional resonance.
            </p>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              With the creation of **Nino D**, these paintings leave the flat surfaces of the gallery walls, translating details into luxury textiles like Mulberry silk carrés. This movement preserves the purity of the artwork while establishing a dialogue with human movement.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey border-b border-stone-grey/15 pb-2">
              Selected Exhibitions
            </h3>
            <div className="space-y-4 pt-2">
              {exhibitions.map((ex, i) => (
                <div key={i} className="flex justify-between items-start text-xs">
                  <span className="font-sans font-medium text-ink-black/60 w-16">{ex.year}</span>
                  <div className="flex-grow flex flex-col font-sans tracking-wide">
                    <span className="font-serif text-sm text-ink-black">{ex.title}</span>
                    <span className="text-[10px] text-stone-grey uppercase tracking-wider">{ex.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-stone-grey/15">
            <h3 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey">
              Contact & Representation
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed">
              For representation queries, press acquisitions, or private viewing appointments, please contact the studio representative at{" "}
              <a href="mailto:studio@ninod.com" className="text-deep-oxblood hover:underline">
                studio@ninod.com
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

      </div>

    </div>
  );
}
