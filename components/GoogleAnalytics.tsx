import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

/**
 * Loads Google Analytics 4 site-wide (production builds only, so local
 * development does not pollute the numbers).
 */
export default function GoogleAnalytics() {
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];if(!window.gtag){window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config','${GA_ID}');}`}
      </Script>
      <Script
        id="ga-lib"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
