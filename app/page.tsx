import Link from "next/link";
import Image from "next/image";
import WearableSlider from "@/components/WearableSlider";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">

      {/* ==========================================
          HERO SECTION (Silence / Brand Statement)
          ========================================== */}
      <section className="w-full border-b border-stone-grey/20 bg-warm-ivory">
        {/* Mobile Hero Layout (< 768px) */}
        <div className="flex flex-col md:hidden w-full px-6 py-12 gap-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-grey">
              <Image
                src="/images/homepage/hero/hero-left.jpg"
                alt="Painting detail by Nino Devdariani"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-grey">
              <Image
                src="/images/homepage/hero/hero-right.png"
                alt="Wearable editorial by Nino Devdariani"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          <div className="text-center flex flex-col items-center px-2">
            <h1 className="font-serif text-4xl tracking-[0.25em] uppercase text-ink-black mb-4">Nino D</h1>
            <h2 className="font-serif italic text-lg text-deep-oxblood tracking-wide mb-6">
              Paintings that leave the wall.
            </h2>
            <p className="text-xs text-stone-grey leading-relaxed max-w-sm mb-10 font-sans tracking-wide">
              Original works, limited editions, and wearable pieces by Nino Devdariani.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <Link
                href="/wearable-archive"
                className="bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.2em] font-medium py-4 px-6 text-center hover:bg-deep-oxblood transition-colors duration-300"
              >
                Explore The Wearable Archive
              </Link>
              <Link
                href="/visual-archive"
                className="border border-stone-grey/30 text-ink-black text-xs uppercase tracking-[0.2em] font-medium py-4 px-6 text-center hover:border-ink-black transition-colors duration-300"
              >
                Explore The Visual Archive
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Hero Layout (>= 768px) */}
        <div className="hidden md:grid grid-cols-10 gap-8 lg:gap-12 max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-24 items-center min-h-[calc(100vh-80px)]">
          {/* Left Column (30%) */}
          <div className="col-span-3 relative aspect-[3/4] overflow-hidden bg-paper-grey group">
            <Image
              src="/images/homepage/hero/hero-left.jpg"
              alt="Painting detail by Nino Devdariani"
              fill
              priority
              className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
              sizes="30vw"
            />
          </div>

          {/* Center Column (40%) */}
          <div className="col-span-4 bg-warm-ivory text-center flex flex-col items-center px-4 lg:px-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-grey mb-4 font-medium">EST. 2026</span>
            <h1 className="font-serif text-5xl lg:text-6xl tracking-[0.25em] uppercase text-ink-black mb-6">Nino D</h1>
            <h2 className="font-serif italic text-xl text-deep-oxblood tracking-wide mb-6">
              Paintings that leave the wall.
            </h2>
            <p className="text-xs text-stone-grey leading-relaxed max-w-xs mb-10 font-sans tracking-wide">
              Original works, limited editions, and wearable pieces by Nino Devdariani.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link
                href="/wearable-archive"
                className="bg-ink-black text-warm-ivory text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-6 hover:bg-deep-oxblood transition-colors duration-300 text-center"
              >
                Explore The Wearable Archive
              </Link>
              <Link
                href="/visual-archive"
                className="border border-stone-grey/30 text-ink-black text-[10px] uppercase tracking-[0.25em] font-medium py-4 px-6 hover:border-ink-black transition-colors duration-300 text-center"
              >
                Explore The Visual Archive
              </Link>
            </div>
          </div>

          {/* Right Column (30%) */}
          <div className="col-span-3 relative aspect-[3/4] overflow-hidden bg-paper-grey group">
            <Image
              src="/images/homepage/hero/hero-right.png"
              alt="Wearable scarf editorial"
              fill
              priority
              className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
              sizes="30vw"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 01 - PAINTINGS / ORIGIN
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-stone-grey/20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Text Block */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">01</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Origin</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
              Every piece begins with the painted world.
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              Nino Devdariani’s paintings form the origin of Nino D — a world of figures, fragments, gestures, and scenes that move beyond the canvas.
            </p>
            <div className="pt-4">
              <Link
                href="/visual-archive"
                className="text-xs uppercase tracking-[0.2em] font-medium border-b border-ink-black/20 pb-1 hover:border-deep-oxblood hover:text-deep-oxblood transition-all duration-300"
              >
                Explore The Visual Archive
              </Link>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="col-span-1 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-paper-grey group">
            <Image
              src="/images/homepage/galerry.png"
              alt="Original abstract painting by Nino Devdariani"
              fill
              className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 02 - THE WEARABLE ARCHIVE / MOVEMENT
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-stone-grey/20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Text Block (40% desktop, i.e., col-span-5) */}
          <div className="col-span-1 md:col-span-5 space-y-6 order-1">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">02</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Movement</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
              The Wearable Archive
            </h3>
            <h4 className="font-serif italic text-lg text-deep-oxblood tracking-wide">
              Works translated into silk.
            </h4>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              The Wearable Archive transforms fragments of original paintings into limited wearable pieces — created to be worn, preserved, and collected.
            </p>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide italic">
              Nino D is not worn to match the outfit. It is worn to change it.
            </p>
            <div className="pt-4">
              <Link
                href="/wearable-archive"
                className="text-xs uppercase tracking-[0.2em] font-medium border-b border-ink-black/20 pb-1 hover:border-deep-oxblood hover:text-deep-oxblood transition-all duration-300"
              >
                Explore Wearable Works
              </Link>
            </div>
          </div>

          {/* Right Slider Block (60% desktop, i.e., col-span-7) */}
          <div className="col-span-1 md:col-span-7 order-2">
            <WearableSlider />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 03 - MADE TO BE COLLECTED / COLLECTIBILITY
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-stone-grey/20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Large Mockup Image */}
          <div className="col-span-1 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-paper-grey group">
            <Image
              src="/images/homepage/certificate.png"
              alt="Archival certificate of authenticity mockup"
              fill
              className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          {/* Right Text Block */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">03</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Preservation</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
              Made to be collected.
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              Selected works are released as limited editions with archive documentation, edition numbers, and certificates of authenticity. Every piece carries an archival signature stamp guaranteeing its collector value and aesthetic pedigree.
            </p>
            <div className="pt-4">
              <Link
                href="/acquire"
                className="text-xs uppercase tracking-[0.2em] font-medium border-b border-ink-black/20 pb-1 hover:border-deep-oxblood hover:text-deep-oxblood transition-all duration-300"
              >
                Begin an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 04 - STUDIO / ARTIST
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-stone-grey/20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Text Block */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">04</span>
              <span className="h-[1px] w-12 bg-stone-grey/30" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">The Artist</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
              The artist behind the world.
            </h3>
            <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
              Nino Devdariani builds a visual language of figures, memory, theatrical fragments, and emotional movement. Nino D extends that language beyond the canvas, creating tactile artifacts meant to carry structural weight and grace.
            </p>
            <div className="pt-4">
              <Link
                href="/studio"
                className="text-xs uppercase tracking-[0.2em] font-medium border-b border-ink-black/20 pb-1 hover:border-deep-oxblood hover:text-deep-oxblood transition-all duration-300"
              >
                Visit Studio
              </Link>
            </div>
          </div>

          {/* Right Large Studio Image */}
          <div className="col-span-1 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-paper-grey group">
            <Image
              src="/images/homepage/studio.png"
              alt="Nino Devdariani artist studio"
              fill
              className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 05 - ACQUIRE / INQUIRY
          ========================================== */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left Text & Stationery Block */}
          <div className="col-span-1 md:col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">05</span>
                <span className="h-[1px] w-12 bg-stone-grey/30" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Acquisition</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-black leading-tight tracking-wide">
                Acquire a work. Begin an inquiry.
              </h3>
              <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
                For original works, wearable editions, collaborations, and gallery inquiries, contact the studio directly using the secure inquiry system. We prioritize private sales and curated editions.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-grey group">
              <Image
                src="/images/homepage/inquiry.png"
                alt="Studio stationery envelope and signature card"
                fill
                className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Form Block */}
          <div className="col-span-1 md:col-span-7 w-full md:sticky md:top-24">
            <InquiryForm />
          </div>
        </div>
      </section>

    </div>
  );
}
