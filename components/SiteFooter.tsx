"use client";

import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { usePathname } from "next/navigation";
import WaitlistForm from "@/components/WaitlistForm";

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/card") {
    return null;
  }

  return (
    <footer className="w-full bg-paper-grey text-ink-black py-16 px-6 md:px-12 border-t border-stone-grey/20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Left Column - Brand Info */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between">
          <div className="space-y-4">
            <Link href="/" className="relative inline-block transition-colors text-ink-black hover:text-deep-oxblood">
              <LogoMark className="h-8 w-auto" />
            </Link>
            <p className="font-serif text-sm italic text-stone-grey tracking-wide max-w-xs">
              Paintings that leave the wall.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-grey mt-8 md:mt-0">
            © {new Date().getFullYear()} Nino Devdariani. All rights reserved.
          </div>
        </div>

        {/* Middle Column - Navigation */}
        <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey">Navigation</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/visual-archive" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors w-fit">
              Visual Archive
            </Link>
            <Link href="/wearable-archive" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors w-fit">
              Wearable Archive
            </Link>
            <Link href="/about" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors w-fit">
              About
            </Link>
            <Link href="/studio" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors w-fit">
              Studio
            </Link>
            <Link href="/acquire" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors w-fit">
              Inquire
            </Link>
          </nav>
        </div>

        {/* Waitlist Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey">Join the list</h4>
          <p className="text-xs text-stone-grey leading-relaxed">
            First access to Edition 01 before it opens publicly. One hundred numbered pieces, opened once, then closed forever.
          </p>
          <WaitlistForm source="footer" />
        </div>

        {/* Right Column - Social & Legal */}
        <div className="col-span-1 md:col-span-2 flex flex-col space-y-4 md:items-end">
          <h4 className="text-xs uppercase tracking-[0.25em] font-medium text-stone-grey">Connect</h4>
          <div className="flex flex-col space-y-3 md:items-end">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors">
              Pinterest
            </a>
            <a href="mailto:studio@ninod.space" className="text-xs uppercase tracking-[0.2em] hover:text-deep-oxblood transition-colors">
              Email
            </a>
            <div className="pt-4 flex flex-col space-y-2 md:items-end border-t border-stone-grey/10 w-full md:w-auto">
              <Link href="/privacy" className="text-[10px] uppercase tracking-[0.2em] text-stone-grey hover:text-deep-oxblood transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[10px] uppercase tracking-[0.2em] text-stone-grey hover:text-deep-oxblood transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
