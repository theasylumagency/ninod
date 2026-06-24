"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { usePathname } from "next/navigation";
import { useVault } from "@/components/VaultContext";
import { EDITIONS_OPEN } from "@/data/launch";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useVault();

  if (pathname === "/card") {
    return null;
  }

  const links = [
    { name: "Visual Archive", href: "/visual-archive" },
    { name: "Wearable Archive", href: "/wearable-archive" },
    { name: "About", href: "/about" },
    { name: "Inquire", href: "/acquire" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar Background and Blur wrapper */}
      <div className="absolute inset-0 bg-warm-ivory/80 backdrop-blur-md border-b border-stone-grey/20 -z-10" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 flex items-center transition-colors text-ink-black hover:text-deep-oxblood">
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

          {/* The Vault — only once editions are open */}
          {EDITIONS_OPEN && (
            <Link
              href="/vault"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 flex items-center gap-1.5 hover:text-deep-oxblood ${
                pathname.startsWith("/vault") ? "text-deep-oxblood" : "text-ink-black"
              }`}
            >
              The Vault
              {count > 0 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[9px] leading-none rounded-full bg-deep-oxblood text-warm-ivory">
                  {count}
                </span>
              )}
            </Link>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none"
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

          {EDITIONS_OPEN && (
            <Link
              href="/vault"
              onClick={() => setIsOpen(false)}
              className={`text-2xl uppercase tracking-[0.25em] font-serif transition-colors py-2 flex items-center gap-2 hover:text-deep-oxblood ${
                pathname.startsWith("/vault") ? "text-deep-oxblood" : "text-ink-black"
              }`}
            >
              The Vault
              {count > 0 && (
                <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 text-xs leading-none rounded-full bg-deep-oxblood text-warm-ivory">
                  {count}
                </span>
              )}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
