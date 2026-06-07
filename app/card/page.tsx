"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoMark from "@/components/LogoMark";

export default function CardPage() {
  const [saved, setSaved] = useState(false);

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Nino Devdariani
ORG:Nino D
TITLE:Artist
TEL;TYPE=work,voice:+995574406061
EMAIL;TYPE=WORK,PREF:studio@ninod.space
URL;TYPE=WORK:https://ninod.space
NOTE:Contemporary Art & Wearable Archive by Nino Devdariani.
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Nino_Devdariani.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black min-h-screen pb-24 font-sans select-none antialiased relative">
      
      {/* ==========================================
          MOBILE STICKY APP-LIKE HEADER
          ========================================== */}
      <header className="sticky top-0 z-50 w-full bg-warm-ivory/95 backdrop-blur-md border-b border-stone-grey/25 py-4 px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-stone-grey hover:text-ink-black transition-colors"
          aria-label="Go Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        
        <Link href="/" className="flex justify-center flex-grow pr-5">
          <LogoMark className="h-6 w-auto text-ink-black" />
        </Link>
      </header>

      {/* ==========================================
          SUCCESS TOAST
          ========================================== */}
      <div 
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-ink-black text-warm-ivory px-6 py-3 shadow-xl border border-stone-grey/30 flex items-center gap-3 transition-all duration-500 ease-out max-w-[90%] w-sm ${
          saved ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-aged-brass shrink-0 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold uppercase tracking-wider">Contact Saved</span>
          <span className="text-[10px] text-stone-grey">VCard (.vcf) file successfully generated</span>
        </div>
      </div>

      {/* ==========================================
          HERO BANNER
          ========================================== */}
      <section className="relative w-full aspect-[4/3] bg-paper-grey overflow-hidden border-b border-stone-grey/25">
        <Image
          src="/art/resistance.jpg"
          alt="Nino Devdariani Artwork Detail"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-ivory via-warm-ivory/10 to-transparent"></div>
      </section>

      {/* ==========================================
          BRAND INTRO
          ========================================== */}
      <section className="px-6 pt-6 pb-4 text-center flex flex-col items-center">
        <h1 className="font-serif italic text-3xl md:text-4xl text-ink-black tracking-wide leading-tight">
          Paintings that leave the wall.
        </h1>
        <p className="text-xs text-stone-grey mt-3 max-w-xs leading-relaxed tracking-wide">
          A world of figures, fragments, and wearable silk archives by artist Nino Devdariani.
        </p>
      </section>

      {/* ==========================================
          PRIMARY CALL TO ACTION: SAVE CONTACT CARD
          ========================================== */}
      <section className="px-6 py-6 w-full max-w-md mx-auto">
        <div className="bg-paper-grey/40 border border-stone-grey/25 p-6 shadow-sm flex flex-col items-center text-center gap-4 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-deep-oxblood"></div>
          
          <div className="w-12 h-12 bg-warm-ivory rounded-full flex items-center justify-center border border-stone-grey/20 text-deep-oxblood shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>

          <div className="space-y-1">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-ink-black">Nino Devdariani</h3>
            <p className="text-[10px] text-stone-grey uppercase tracking-widest font-medium">studio@ninod.com</p>
          </div>

          <button
            onClick={handleSaveContact}
            className="w-full bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-aged-brass">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-9-3.5h9.81m-9.81 3h5.625M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            SAVE CONTACT INFO
          </button>
          
          <p className="text-[9px] text-stone-grey/80 leading-normal">
            Add Nino D Representative to your phone contact list in one tap.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 01 - THE VISUAL ARCHIVE
          ========================================== */}
      <section className="px-6 py-8 flex flex-col gap-5 border-t border-stone-grey/15 mt-4">
        <div className="flex flex-col gap-1.5 border-b border-stone-grey/25 pb-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-deep-oxblood font-bold">01 — The Visual Archive</span>
          <h2 className="font-serif text-2xl text-ink-black uppercase tracking-wide">Original Works</h2>
          <p className="text-xs text-stone-grey">Mediums on canvas, linen, and oil texture.</p>
        </div>
        
        <div className="relative w-full aspect-[4/5] bg-paper-grey border border-stone-grey/15 p-2 bg-white shadow-sm overflow-hidden group">
          <Image
            src="/art/alter_ego.jpg"
            alt="Original Painting - Alter Ego"
            fill
            className="object-cover p-2 transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
            sizes="100vw"
          />
        </div>

        <Link
          href="/visual-archive"
          className="w-full text-center bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood transition-colors duration-300 shadow-md"
        >
          EXPLORE PAINTINGS
        </Link>
      </section>

      {/* ==========================================
          SECTION 02 - THE WEARABLE ARCHIVE
          ========================================== */}
      <section className="px-6 py-8 flex flex-col gap-5 border-t border-stone-grey/15 mt-4">
        <div className="flex flex-col gap-1.5 border-b border-stone-grey/25 pb-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-deep-oxblood font-bold">02 — The Wearable Archive</span>
          <h2 className="font-serif text-2xl text-ink-black uppercase tracking-wide">Translated into Silk</h2>
          <p className="text-xs text-stone-grey">Limited editions for the art collector.</p>
        </div>

        <div className="relative w-full aspect-square bg-paper-grey border border-stone-grey/15 p-2 bg-white shadow-sm overflow-hidden group">
          <Image
            src="/scarfs/alter_ego.png"
            alt="Wearable Scarf - Alter Ego"
            fill
            className="object-cover p-2 transition-transform duration-[2000ms] scale-100 group-hover:scale-102"
            sizes="100vw"
          />
        </div>

        <Link
          href="/wearable-archive"
          className="w-full text-center border border-ink-black text-ink-black text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-ink-black hover:text-warm-ivory transition-colors duration-300 shadow-sm"
        >
          EXPLORE WEARABLES
        </Link>
      </section>

      {/* ==========================================
          QUICK ACTIONS
          ========================================== */}
      <section className="px-6 py-10 bg-paper-grey/30 border-t border-stone-grey/20 mt-8">
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-grey font-bold mb-6 text-center">Studio Navigation</h4>
        <ul className="flex flex-col gap-1">
          <li>
            <Link 
              href="/acquire" 
              className="flex items-center justify-between py-4 border-b border-stone-grey/20 text-ink-black hover:text-deep-oxblood transition-colors group"
            >
              <span className="font-serif text-lg tracking-wide">Begin an Inquiry</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </li>
          <li>
            <Link 
              href="/studio" 
              className="flex items-center justify-between py-4 border-b border-stone-grey/20 text-ink-black hover:text-deep-oxblood transition-colors group"
            >
              <span className="font-serif text-lg tracking-wide">About the Studio</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </li>
        </ul>
        
        <div className="flex justify-center gap-6 mt-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors">
            Instagram
          </a>
          <span className="text-stone-grey/30">•</span>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors">
            Pinterest
          </a>
          <span className="text-stone-grey/30">•</span>
          <a href="mailto:studio@ninod.com" className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-grey hover:text-ink-black transition-colors">
            Email
          </a>
        </div>
        <p className="text-[9px] text-stone-grey/60 text-center mt-8 tracking-wider">
          © {new Date().getFullYear()} NINO DEVDARIANI. ALL RIGHTS RESERVED.
        </p>
      </section>

      {/* ==========================================
          PERSISTENT MOBILE STICKY BOTTOM BAR
          ========================================== */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-warm-ivory/90 backdrop-blur-md border-t border-stone-grey/20 z-40 flex justify-center shadow-lg">
        <button
          onClick={handleSaveContact}
          className="w-full max-w-md bg-ink-black text-warm-ivory text-[10px] font-semibold uppercase tracking-[0.2em] py-4 px-6 hover:bg-deep-oxblood active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-aged-brass">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          SAVE CONTACT INFO (VCF)
        </button>
      </div>

    </div>
  );
}
