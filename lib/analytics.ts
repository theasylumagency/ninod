// ============================================================
//  Google Analytics 4 — measurement ID + a tiny event helper.
//  Page views (including client-side navigation) are recorded
//  automatically by GA4 "enhanced measurement".
//  Everything below adds the events that answer:
//  which works people look at, and who reaches out.
// ============================================================

import { catalogueNo, type PolyphonyWork } from "@/data/polyphony";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PSS9WZ9ZL0";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

/** Creates the gtag queue if gtag.js has not loaded yet, so no early event is lost. */
function ensureGtag(): GtagFn | null {
  if (typeof window === "undefined" || !GA_ID) return null;
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js requires the original `arguments` object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }
  return window.gtag;
}

export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    ensureGtag()?.("event", event, params);
  } catch {
    // Analytics must never break the page.
  }
}

/** GA4 e-commerce item — makes per-work interest visible in GA's item reports. */
export function workItem(w: PolyphonyWork, index?: number) {
  return {
    item_id: `polyphony-${catalogueNo(w.no)}`,
    item_name: w.title,
    item_brand: "Nino Devdariani",
    item_category: "Polyphony",
    item_category2: w.status,
    item_variant: String(w.year),
    price: w.priceUsd,
    quantity: 1,
    ...(index !== undefined ? { index } : {}),
  };
}
