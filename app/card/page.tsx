import Link from "next/link";
import Image from "next/image";
import LogoMark from "@/components/LogoMark";
import SaveContactButton from "@/components/SaveContactButton";

const phoneDisplay = "+995 574 40 60 61";
const phoneHref = "+995574406061";
const email = "studio@ninod.space";

export default function CardPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="w-full flex flex-col bg-warm-ivory text-ink-black min-h-screen pb-28 font-sans antialiased relative">
      {/* ==========================================
          MOBILE STICKY HEADER
          ========================================== */}
      <header className="sticky top-0 z-50 w-full bg-warm-ivory/95 backdrop-blur-md border-b border-stone-grey/25 py-4 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-stone-grey hover:text-ink-black transition-colors"
          aria-label="Go home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <Link href="/" className="flex justify-center flex-grow pr-5" aria-label="Nino D home">
          <LogoMark className="h-6 w-auto text-ink-black" />
        </Link>
      </header>

      {/* ==========================================
          HERO IMAGE
          ========================================== */}
      <section className="relative w-full aspect-[4/3] bg-paper-grey overflow-hidden border-b border-stone-grey/25">
        <Image
          src="/art/resistance.jpg"
          alt="Nino Devdariani artwork detail"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory via-warm-ivory/10 to-transparent" />
      </section>

      {/* ==========================================
          BRAND INTRO
          ========================================== */}
      <section className="px-6 pt-8 pb-5 text-center flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.34em] text-stone-grey font-semibold mb-3">
          Nino D
        </p>

        <h1 className="font-serif italic text-3xl md:text-4xl text-ink-black tracking-wide leading-tight">
          Paintings that leave the wall.
        </h1>

        <p className="text-xs text-stone-grey mt-4 max-w-xs leading-relaxed tracking-wide">
          Selected works, wearable silk editions, and direct studio contact.
        </p>
      </section>

      {/* ==========================================
          PRIMARY ACTIONS
          ========================================== */}
      <section className="px-6 py-6 w-full max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-3">
          <Link
            href="/visual-archive"
            className="w-full text-center bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md"
          >
            View Selected Works
          </Link>

          <Link
            href="/wearable-archive"
            className="w-full text-center border border-ink-black text-ink-black text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-ink-black hover:text-warm-ivory active:scale-[0.98] transition-all duration-300 shadow-sm"
          >
            Explore Silk Editions
          </Link>

          <SaveContactButton
            className="w-full text-center border border-stone-grey/40 text-ink-black text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:border-ink-black hover:bg-paper-grey/50 active:scale-[0.98] transition-all duration-300 shadow-sm"
          />
        </div>

        <p className="text-[9px] text-stone-grey/80 leading-normal text-center mt-4">
          Your phone may ask you to confirm adding the contact.
        </p>
      </section>

      {/* ==========================================
          CONTACT QUICK ACTIONS
          ========================================== */}
      <section className="px-6 py-6 w-full max-w-md mx-auto">
        <div className="bg-paper-grey/40 border border-stone-grey/25 p-6 shadow-sm flex flex-col gap-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-deep-oxblood" />

          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl text-ink-black tracking-wide">
              Studio Contact
            </h2>

            <p className="text-xs text-stone-grey leading-relaxed">
              For original works, wearable editions, collaborations, and gallery inquiries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`mailto:${email}`}
              className="bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-4 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center text-center"
            >
              Email Studio
            </a>

            <a
              href={`https://wa.me/${phoneHref.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-black text-ink-black text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-4 hover:bg-ink-black hover:text-warm-ivory active:scale-[0.98] transition-all duration-300 shadow-sm flex items-center justify-center text-center"
            >
              WhatsApp
            </a>
          </div>

          <div className="text-center space-y-1 pt-2">
            <a
              href={`mailto:${email}`}
              className="block text-[10px] uppercase tracking-[0.22em] text-stone-grey hover:text-ink-black transition-colors"
            >
              {email}
            </a>

            <a
              href={`tel:${phoneHref}`}
              className="block text-[10px] uppercase tracking-[0.22em] text-stone-grey hover:text-ink-black transition-colors"
            >
              {phoneDisplay}
            </a>

            <a
              href="https://ninod.space"
              className="block text-[10px] uppercase tracking-[0.22em] text-stone-grey hover:text-ink-black transition-colors"
            >
              ninod.space
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 01 — VISUAL ARCHIVE
          ========================================== */}
      <section className="px-6 py-8 flex flex-col gap-5 border-t border-stone-grey/15 mt-4">
        <div className="flex flex-col gap-1.5 border-b border-stone-grey/25 pb-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-deep-oxblood font-bold">
            01 — Visual Archive
          </span>

          <h2 className="font-serif text-2xl text-ink-black uppercase tracking-wide">
            Selected Works
          </h2>

          <p className="text-xs text-stone-grey">
            Selected paintings from the Nino D archive.
          </p>
        </div>

        <Link
          href="/visual-archive"
          className="relative w-full aspect-[4/5] bg-paper-grey border border-stone-grey/15 p-2 bg-white shadow-sm overflow-hidden group block"
          aria-label="Open Visual Archive"
        >
          <Image
            src="/art/alter_ego.jpg"
            alt="Original painting from the Nino D Visual Archive"
            fill
            className="object-cover p-2 transition-transform duration-[2000ms] group-hover:scale-[1.02]"
            sizes="100vw"
          />
        </Link>

        <Link
          href="/visual-archive"
          className="w-full text-center bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood transition-colors duration-300 shadow-md"
        >
          Open Visual Archive
        </Link>
      </section>

      {/* ==========================================
          SECTION 02 — WEARABLE ARCHIVE
          ========================================== */}
      <section className="px-6 py-8 flex flex-col gap-5 border-t border-stone-grey/15 mt-4">
        <div className="flex flex-col gap-1.5 border-b border-stone-grey/25 pb-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-deep-oxblood font-bold">
            02 — Wearable Archive
          </span>

          <h2 className="font-serif text-2xl text-ink-black uppercase tracking-wide">
            Silk Editions
          </h2>

          <p className="text-xs text-stone-grey">
            Limited silk editions translated from original works.
          </p>
        </div>

        <Link
          href="/wearable-archive"
          className="relative w-full aspect-square bg-paper-grey border border-stone-grey/15 p-2 bg-white shadow-sm overflow-hidden group block"
          aria-label="Open Wearable Archive"
        >
          <Image
            src="/scarfs/alter_ego.png"
            alt="Limited silk edition from the Nino D Wearable Archive"
            fill
            className="object-cover p-2 transition-transform duration-[2000ms] group-hover:scale-[1.02]"
            sizes="100vw"
          />
        </Link>

        <Link
          href="/wearable-archive"
          className="w-full text-center border border-ink-black text-ink-black text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-ink-black hover:text-warm-ivory transition-colors duration-300 shadow-sm"
        >
          Open Wearable Archive
        </Link>
      </section>

      {/* ==========================================
          SAVE CONTACT BLOCK
          ========================================== */}
      <section className="px-6 py-10 border-t border-stone-grey/15 mt-4">
        <div className="w-full max-w-md mx-auto border border-stone-grey/25 bg-paper-grey/30 p-6 text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-warm-ivory rounded-full flex items-center justify-center border border-stone-grey/20 text-deep-oxblood shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl text-ink-black tracking-wide">
              Save the studio contact
            </h2>

            <p className="text-xs text-stone-grey leading-relaxed">
              Save the website, studio email, and direct contact details. Your phone may ask for confirmation.
            </p>
          </div>

          <SaveContactButton
            className="w-full bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          />
        </div>
      </section>

      {/* ==========================================
          STUDIO NAVIGATION
          ========================================== */}
      <section className="px-6 py-10 bg-paper-grey/30 border-t border-stone-grey/20 mt-4">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-grey font-bold mb-6 text-center">
          Studio Navigation
        </h2>

        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/acquire"
              className="flex items-center justify-between py-4 border-b border-stone-grey/20 text-ink-black hover:text-deep-oxblood transition-colors group"
            >
              <span className="font-serif text-lg tracking-wide">
                Begin an Inquiry
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/studio"
              className="flex items-center justify-between py-4 border-b border-stone-grey/20 text-ink-black hover:text-deep-oxblood transition-colors group"
            >
              <span className="font-serif text-lg tracking-wide">
                About the Studio
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors"
          >
            Instagram
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors"
          >
            Pinterest
          </a>

          <a
            href={`mailto:${email}`}
            className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-[9px] text-stone-grey/60 text-center mt-8 tracking-wider">
          © {currentYear} NINO D BY NINO DEVDARIANI. ALL RIGHTS RESERVED.
        </p>
      </section>

      {/* ==========================================
          PERSISTENT MOBILE BOTTOM BAR
          ========================================== */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-warm-ivory/90 backdrop-blur-md border-t border-stone-grey/20 z-40 flex justify-center shadow-lg">
        <div className="w-full max-w-md grid grid-cols-2 gap-3">
          <a
            href={`mailto:${email}`}
            className="bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.18em] py-4 px-4 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center text-center"
          >
            Email Studio
          </a>

          <SaveContactButton
            className="border border-ink-black text-ink-black bg-warm-ivory text-[10px] font-semibold uppercase tracking-[0.18em] py-4 px-4 hover:bg-ink-black hover:text-warm-ivory active:scale-[0.98] transition-all duration-300 shadow-sm flex items-center justify-center text-center"
          />
        </div>
      </div>
    </main>
  );
}