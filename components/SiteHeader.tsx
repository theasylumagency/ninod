"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Visual Archive", href: "/visual-archive" },
    { name: "Wearable Archive", href: "/wearable-archive" },
    { name: "About", href: "/studio" },
    { name: "Inquire", href: "/acquire" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-warm-ivory/80 backdrop-blur-md border-b border-stone-grey/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative flex items-center transition-colors text-ink-black hover:text-deep-oxblood">
          <LogoMark className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 hover:text-deep-oxblood ${
                  isActive ? "text-deep-oxblood" : "text-ink-black"
                }`}
              >
                {link.name}
                {/* Underline Slide-in Transition */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] bg-deep-oxblood transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-between w-6 h-4 z-50 focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-[1px] w-full bg-ink-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7.5px]" : ""
            }`}
          />
          <span
            className={`h-[1px] w-full bg-ink-black transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1px] w-full bg-ink-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-warm-ivory flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl uppercase tracking-[0.25em] font-serif transition-colors py-2 hover:text-deep-oxblood ${
                  isActive ? "text-deep-oxblood" : "text-ink-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
