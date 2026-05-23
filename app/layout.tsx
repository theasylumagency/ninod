import type { Metadata } from "next";
import { Inter, Bodoni_Moda, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nino D — Paintings that leave the wall",
  description: "Contemporary art brand platform by Nino Devdariani, featuring original paintings, limited editions, and wearable silk archive works.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bodoni.variable} ${cormorant.variable} h-full antialiasedScroll`}
    >
      <body className="min-h-full flex flex-col bg-warm-ivory text-ink-black font-sans selection:bg-deep-oxblood/10 selection:text-deep-oxblood">
        <SiteHeader />
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
