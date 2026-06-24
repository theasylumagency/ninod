import type { Metadata } from "next";
import { Inter, Bodoni_Moda, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AnnounceBar from "@/components/AnnounceBar";
import { VaultProvider } from "@/components/VaultContext";

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

const siteUrl = "https://ninod.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nino D — Paintings that leave the wall",
    template: "%s — Nino D",
  },
  description:
    "Contemporary art brand by Nino Devdariani, featuring original paintings, limited editions, and wearable silk archive works.",
  keywords: [
    "Nino Devdariani",
    "Nino D",
    "contemporary art",
    "original paintings",
    "limited edition art",
    "wearable art",
    "silk scarf art",
    "art archive",
  ],
  authors: [{ name: "Nino Devdariani" }],
  creator: "Nino Devdariani",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Nino D",
    title: "Nino D — Paintings that leave the wall",
    description:
      "Contemporary art brand by Nino Devdariani, featuring original paintings, limited editions, and wearable silk archive works.",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nino D — Paintings that leave the wall",
    description:
      "Contemporary art brand by Nino Devdariani, featuring original paintings, limited editions, and wearable silk archive works.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "Nino D",
                  url: siteUrl,
                  logo: `${siteUrl}/images/nino-d-logo.svg`,
                  description:
                    "Contemporary art brand by Nino Devdariani, featuring original paintings, limited editions, and wearable silk archive works.",
                  founder: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Nino Devdariani",
                  url: `${siteUrl}/about`,
                  jobTitle: "Visual Artist",
                  description:
                    "Contemporary visual artist working in painting and wearable silk editions.",
                  worksFor: { "@id": `${siteUrl}/#organization` },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Nino D",
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
        <VaultProvider>
          <AnnounceBar />
          <SiteHeader />
          <main className="flex-grow flex flex-col w-full">{children}</main>
          <SiteFooter />
        </VaultProvider>
      </body>
    </html>
  );
}
