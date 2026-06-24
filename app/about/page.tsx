import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import WaitlistSection from "@/components/WaitlistSection";

export const metadata: Metadata = {
  title: { absolute: "Nino Devdariani — The Artist Behind Nino D" },
  description:
    "The visual world behind Nino D: Nino Devdariani's paintings, archive, and limited silk editions.",
  alternates: { canonical: "/about" },
};

const microWorldImages = [
  {
    src: "/images/about/micro-world-detail-1.jpg",
    alt: "Dense figurative painting detail by Nino Devdariani",
    caption: "Figures",
  },
  {
    src: "/images/about/micro-world-detail-2.jpg",
    alt: "Painting detail with faces and cultural fragments",
    caption: "Memory",
  },
  {
    src: "/images/about/micro-world-detail-3.jpg",
    alt: "Layered artwork detail from Nino Devdariani's visual archive",
    caption: "Fragments",
  },
];

const editionNotes = [
  "Limited editions",
  "Numbered works",
  "Archive documentation",
  "Certificate of authenticity",
];

function SectionKicker({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">
        {number}
      </span>
      <span className="h-[1px] w-12 bg-stone-grey/30" />
      <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
        {label}
      </span>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block text-xs uppercase tracking-[0.2em] font-medium border-b border-ink-black/20 pb-1 hover:border-deep-oxblood hover:text-deep-oxblood transition-all duration-300"
    >
      {children}
    </Link>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black overflow-x-hidden">
      <section className="w-full border-b border-stone-grey/15">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-12 md:px-12 md:py-20 lg:gap-20">
          <div className="archive-reveal col-span-1 space-y-7 md:col-span-5">
            <SectionKicker number="The Artist" label="Nino D" />
            <div className="space-y-5">
              <h1 className="font-serif text-4xl leading-tight tracking-wider text-ink-black md:text-6xl">
                Nino Devdariani
              </h1>
              <p className="font-serif text-xl italic tracking-wide text-deep-oxblood md:text-2xl">
                The visual world behind Nino D.
              </p>
            </div>
            <div className="max-w-xl space-y-5 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                Nino Devdariani is a Georgian self-taught artist creating
                populated micro-worlds: paintings where memory, color, pain,
                play, and freedom find visible form.
              </p>
              <p>
                Her work does not behave like quiet decoration. It is dense,
                alive, and full of figures: observers, performers, witnesses,
                fragments of culture, and characters that seem to arrive from
                somewhere between memory and imagination.
              </p>
              <p className="font-serif text-base italic tracking-wide text-ink-black/80 md:text-lg">
                Nino D begins with this world and extends it beyond the canvas.
              </p>
            </div>
          </div>

          <div className="archive-reveal archive-reveal-slow col-span-1 md:col-span-7">
            <div className="relative ml-auto aspect-[4/5] w-full overflow-hidden bg-paper-grey md:max-w-[620px]">
              <Image
                src="/images/about/my-generation-hero.jpg"
                alt="My Generation painting crop focused on Nino Devdariani from behind"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 52vw"
                style={{ objectPosition: "50% 70%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-24 md:px-12 md:py-36">
        <div className="archive-reveal mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <SectionKicker number="01" label="Language" />
          </div>
          <div className="max-w-3xl space-y-6 md:col-span-8 md:col-start-5">
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              When Words Were Not Enough
            </h2>
            <p className="text-sm leading-relaxed tracking-wide text-stone-grey md:text-base">
              For years, emotions, memories, fears, joys, losses, and moments
              of tenderness accumulated quietly inside her. Then, almost
              instinctively, they found another language: color, line, rhythm,
              and form.
            </p>
            <p className="font-serif text-xl italic leading-relaxed tracking-wide text-ink-black/80 md:text-2xl">
              Painting became a way to speak where ordinary speech was not
              enough. Not an escape from reality, but a way to give the
              invisible a visible body.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="archive-reveal col-span-1 md:col-span-6">
            <div className="relative w-full aspect-[5/4] overflow-hidden bg-paper-grey">
              <Image
                src="/images/about/color-against-darkness-detail.jpg"
                alt="Bright and crowded painting detail by Nino Devdariani"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
          </div>
          <div className="archive-reveal col-span-1 space-y-6 md:col-span-5 md:col-start-8">
            <SectionKicker number="02" label="Resistance" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              Color Against Darkness
            </h2>
            <div className="space-y-4 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                At first glance, Nino&apos;s paintings may appear bright, festive,
                and full of movement. But behind the intense palette often
                lives something more complex: waiting, vulnerability, pain,
                memory, and the search for light.
              </p>
              <p>Her colors do not hide difficulty. They confront it.</p>
              <p className="font-serif text-lg italic text-ink-black/80 md:text-xl">
                The brightness in her work is not naive optimism; it is
                resistance, a refusal to let darkness have the final word.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-32">
        <div className="archive-reveal mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-6">
            <SectionKicker number="03" label="Micro-World" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              A Populated Micro-World
            </h2>
            <div className="grid gap-5 text-sm leading-relaxed tracking-wide text-stone-grey md:grid-cols-2 md:text-[15px]">
              <p>
                Nino&apos;s compositions rarely leave empty space. Her canvases are
                filled with figures, symbols, gestures, faces, animals, cultural
                references, and fragments of stories.
              </p>
              <p>
                This density is not decorative excess. It reflects the way
                memory and inner life actually behave: crowded, layered,
                restless, and never entirely silent.
              </p>
            </div>
            <p className="font-serif text-xl italic leading-relaxed tracking-wide text-ink-black/80">
              Each painting becomes a living micro-world. Every figure has its
              own presence. Every detail carries a possible story.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {microWorldImages.map((image, index) => (
              <figure
                key={image.src}
                className={`relative w-full overflow-hidden safari-clip-fix bg-paper-grey ${
                  index === 1
                    ? "aspect-[4/5] md:col-span-5 md:mt-12"
                    : "aspect-square md:col-span-3"
                } ${index === 2 ? "md:col-start-10" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-[2000ms] hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <figcaption className="absolute bottom-4 left-4 bg-warm-ivory/85 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-ink-black backdrop-blur-sm">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 bg-paper-grey/30 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="archive-reveal col-span-1 space-y-6 md:col-span-5">
            <SectionKicker number="04" label="Witness" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              The Observer in Her Own Generation
            </h2>
            <div className="space-y-4 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                In My Generation, Nino appears from behind, not as a dominant
                figure, but as an observer.
              </p>
              <p>
                She stands before a world of images, memories, icons, and
                characters connected to childhood and early youth. She is inside
                the painting and outside it at once: part of the world, but also
                its witness.
              </p>
              <p>
                This image reveals something essential about her work. Nino is
                not only creating figures; she is recording a personal and
                cultural memory.
              </p>
            </div>
          </div>
          <div className="archive-reveal archive-reveal-slow col-span-1 md:col-span-7">
            <div className="relative w-full aspect-[6/5] overflow-hidden bg-paper-grey">
              <Image
                src="/images/about/my-generation-observer.jpg"
                alt="My Generation artwork crop showing Nino as observer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectPosition: "48% 68%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="archive-reveal col-span-1 md:col-span-6 md:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden bg-paper-grey">
              <Image
                src="/images/about/studio-process.png"
                alt="Nino Devdariani in the studio with painting materials"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
                style={{ objectPosition: "56% 50%" }}
              />
            </div>
          </div>
          <div className="archive-reveal col-span-1 space-y-6 md:col-span-5 md:order-1">
            <SectionKicker number="05" label="Process" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              Freedom Without Eraser
            </h2>
            <div className="space-y-4 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                Nino works directly with acrylic paint, markers, and ink. She
                does not build her paintings through strict preliminary
                sketches, pencil corrections, or academic systems of proportion.
              </p>
              <p>
                A line is not erased; it becomes part of the composition. A
                shift in direction is not treated as a mistake; it opens another
                path.
              </p>
              <p className="font-serif text-lg italic text-ink-black/80 md:text-xl">
                For Nino, being self-taught is not a limitation. It is the
                source of her independence: a visual language formed before
                rules could contain it.
              </p>
            </div>
            <TextLink href="/studio">Visit the Studio</TextLink>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-32">
        <div className="archive-reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="col-span-1 md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-black">
              <Image
                src="/images/wearable-archive/wearable3.png"
                alt="Silk scarf detail with printed painting fragment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectPosition: "42% 58%" }}
              />
            </div>
          </div>
          <div className="col-span-1 space-y-6 md:col-span-5">
            <SectionKicker number="06" label="Material" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              From Canvas to Textile
            </h2>
            <div className="space-y-4 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                The movement from painting to textile is not accidental in
                Nino&apos;s story.
              </p>
              <p>
                Textile has long been part of her personal and family history.
                It also belongs to her future vision: a desire for her painted
                micro-worlds not to remain locked inside frames, but to continue
                their life in material, clothing, movement, and daily presence.
              </p>
              <p>
                Selected works and fragments are transformed into limited silk
                editions, not as ordinary reproductions, but as collectible
                extensions of the original visual world.
              </p>
            </div>
            <TextLink href="/wearable-archive">Explore the Wearable Archive</TextLink>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-24 md:px-12 md:py-36">
        <div className="archive-reveal mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionKicker number="07" label="Archive" />
          </div>
          <div className="max-w-3xl space-y-6 md:col-span-7">
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              Nino D
            </h2>
            <div className="space-y-4 text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              <p>
                Nino D is the artist-led archive and edition project built
                around Nino Devdariani&apos;s work.
              </p>
              <p>
                It brings together original paintings, selected visual archives,
                and limited wearable editions created from the artist&apos;s
                compositions.
              </p>
              <p className="font-serif text-lg italic text-ink-black/80 md:text-xl">
                The purpose is not to decorate fashion with art. The purpose is
                to let the artwork enter another form without losing its
                authorship, intensity, or value.
              </p>
            </div>
            <TextLink href="/visual-archive">View the Visual Archive</TextLink>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 bg-paper-grey/35 px-6 py-20 md:px-12 md:py-28">
        <div className="archive-reveal mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <div className="max-w-xl space-y-6 md:col-span-5">
            <SectionKicker number="08" label="Editions" />
            <h2 className="font-serif text-3xl leading-tight tracking-wide text-ink-black md:text-5xl">
              Archive and Editions
            </h2>
            <p className="text-sm leading-relaxed tracking-wide text-stone-grey md:text-[15px]">
              Selected wearable works are released as limited editions, numbered
              and documented. Each edition belongs to the archive of the
              artist&apos;s work and is treated as a collectible object.
            </p>
            <p className="font-serif text-lg italic text-ink-black/80">
              Once an edition is closed, it is not repeated.
            </p>
          </div>
          <div className="grid gap-3 md:col-span-6 md:col-start-7">
            {editionNotes.map((note) => (
              <div
                key={note}
                className="border-b border-stone-grey/20 py-5 text-xs uppercase tracking-[0.22em] text-ink-black"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-b border-stone-grey/15 px-6 py-20 md:px-12 md:py-24">
        <div className="archive-reveal mx-auto max-w-7xl">
          <div className="max-w-3xl border-l border-deep-oxblood/35 pl-6 md:pl-10">
            <p className="text-sm leading-relaxed tracking-wide text-stone-grey md:text-base">
              Nino Devdariani is a Georgian self-taught artist from Tbilisi.
              Working primarily with acrylic paint, markers, and ink, she
              creates dense figurative compositions shaped by memory, emotional
              intensity, cultural references, and instinctive freedom. Her work
              forms the foundation of Nino D, an artist-led archive of original
              works and limited silk editions.
            </p>
          </div>
        </div>
      </section>

      <WaitlistSection
        kicker="Edition 01"
        headline="You have seen the world. Now wear a fragment of it."
        subcopy="Selected works become limited silk editions — one hundred numbered pieces, opened once, then closed forever. Edition 01 opens in September. Join the list for first access."
        source="about"
      />
    </div>
  );
}
