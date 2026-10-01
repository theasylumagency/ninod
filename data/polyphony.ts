// ============================================================
//  Polyphony — a collection by Nino Devdariani
//  Single source of truth for the collection, its exhibition
//  and every work's price / availability.
//
//  Kept deliberately separate from data/visualArchive.ts:
//  the Visual Archive stays an interpretive archive; Polyphony
//  is a collection of works on view and for acquisition.
//  Works that also live in the archive point to it through
//  `archiveSlug` — nothing in the archive is duplicated.
//
//  During the fair: change a work's `status` to "reserved" or
//  "sold" and redeploy. Nothing else needs to change.
// ============================================================

export type WorkStatus = "available" | "reserved" | "sold";

export type PolyphonyWork = {
  /** Catalogue number — same order as the artist's price list. */
  no: number;
  slug: string;
  title: string;
  year: number;
  medium: string;
  /** Centimetres, height × width (as listed by the artist). */
  heightCm: number;
  widthCm: number;
  /** US dollars. */
  priceUsd: number;
  status: WorkStatus;
  /** One short line shown under the title. Edit freely. */
  note: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  /** If this work also has an entry in the Visual Archive. */
  archiveSlug?: string;
  /** Title used for the same work in the Visual Archive, if different. */
  archiveTitle?: string;
};

export const POLYPHONY = {
  title: "Polyphony",
  artist: "Nino Devdariani",
  slug: "polyphony",
  path: "/polyphony",
  workCount: 10,
  lede: "Ten works on paper by Nino Devdariani.",
  statement: [
    "In music, polyphony is many independent voices sounding at once — none of them reduced to accompaniment.",
    "Nino Devdariani builds her crowds the same way. Every figure keeps its own pattern, costume and expression; together they form one dense, many-voiced society.",
  ],
  medium: "Acrylic, ink and mixed technique on paper",
  currency: "USD",
  exhibition: {
    name: "Spectrum Chicago",
    venue: "THE MART",
    city: "Chicago",
    /** Leave empty until the booth number is confirmed. */
    booth: "",
    startDate: "2026-10-07",
    endDate: "2026-10-10",
    datesLabel: "October 7–10, 2026",
    shortDatesLabel: "Oct 7–10",
    openingLabel: "Opening Night Preview — Wednesday, October 7, 5–8 PM",
    hours: [
      { day: "Wed, Oct 7", time: "5 PM – 8 PM", note: "Opening Night Preview" },
      { day: "Thu, Oct 8", time: "11 AM – 8 PM" },
      { day: "Fri, Oct 9", time: "11 AM – 8 PM" },
      { day: "Sat, Oct 10", time: "11 AM – 6 PM" },
    ],
    url: "https://redwoodartgroup.com/spectrum-chicago/",
  },
  /**
   * Shows Polyphony in the announcement bar and on the homepage.
   * Set to false to return the site to its previous announcement.
   */
  featured: true,
} as const;

/** Studio contact used by every inquiry path. */
export const STUDIO_CONTACT = {
  email: "studio@ninod.space",
  phoneDisplay: "+995 574 40 60 61",
  phoneHref: "+995574406061",
  whatsapp: "995574406061",
} as const;

const MEDIUM = POLYPHONY.medium;

export const polyphonyWorks: PolyphonyWork[] = [
  {
    no: 1,
    slug: "art-textile",
    title: "Art Textile",
    year: 2024,
    medium: MEDIUM,
    heightCm: 50,
    widthCm: 67,
    priceUsd: 3900,
    status: "available",
    note: "Paintings transferred onto clothing and worn by faceless figures — fabric speaking louder than faces.",
    image: { src: "/images/polyphony/art-textile.jpg", width: 1260, height: 911 },
    archiveSlug: "textile",
    archiveTitle: "Textile",
  },
  {
    no: 2,
    slug: "down-on-the-ground",
    title: "Down on the Ground",
    year: 2024,
    medium: MEDIUM,
    heightCm: 50,
    widthCm: 67,
    priceUsd: 3900,
    status: "available",
    note: "Towering, brightly patterned figures arrive from above; an older world watches them from the ground below.",
    image: { src: "/images/polyphony/down-on-the-ground.jpg", width: 1260, height: 902 },
    archiveSlug: "ai",
    archiveTitle: "AI",
  },
  {
    no: 3,
    slug: "messenger",
    title: "Messenger",
    year: 2023,
    medium: MEDIUM,
    heightCm: 25,
    widthCm: 42,
    priceUsd: 2200,
    status: "available",
    note: "Angels, saints and clergy scattered across a grey ground — a heavenly crowd of messengers in red, gold and white.",
    image: { src: "/images/polyphony/messenger.jpg", width: 2400, height: 1381 },
  },
  {
    no: 4,
    slug: "engagement",
    title: "Engagement",
    year: 2024,
    medium: MEDIUM,
    heightCm: 30,
    widthCm: 44,
    priceUsd: 2600,
    status: "available",
    note: "Figures borrowed from Japanese woodblock prints crowd around a single event, joined by a few guests from other centuries.",
    image: { src: "/images/polyphony/engagement.jpg", width: 1260, height: 908 },
  },
  {
    no: 5,
    slug: "yellow-camel",
    title: "Yellow Camel",
    year: 2025,
    medium: MEDIUM,
    heightCm: 30,
    widthCm: 44,
    priceUsd: 2800,
    status: "available",
    note: "A yellow camel at the heart of a crowded gathering — an accordion, a rooster, a suitcase of puppets and a painting within the painting.",
    image: { src: "/images/polyphony/yellow-camel.jpg", width: 1175, height: 855 },
  },
  {
    no: 6,
    slug: "kimono",
    title: "Kimono",
    year: 2024,
    medium: MEDIUM,
    heightCm: 25,
    widthCm: 40,
    priceUsd: 2800,
    status: "available",
    note: "A procession in black and white ink — kimono-clad figures, each defined by the pattern of its robe.",
    image: { src: "/images/polyphony/kimono.jpg", width: 1260, height: 610 },
  },
  {
    no: 7,
    slug: "at-one-time",
    title: "At One Time",
    year: 2026,
    medium: MEDIUM,
    heightCm: 45,
    widthCm: 65,
    priceUsd: 4300,
    status: "available",
    note: "An interior crowded with heirlooms — bookcases, clocks, painted cabinets — and the women who keep them, gathered as if for a portrait.",
    image: { src: "/images/polyphony/at-one-time.jpg", width: 2048, height: 1402 },
  },
  {
    no: 8,
    slug: "pia-nino",
    title: "Pia-Nino",
    year: 2026,
    medium: MEDIUM,
    heightCm: 45,
    widthCm: 65,
    priceUsd: 4300,
    status: "available",
    note: "A painted society gathered around music, taste, noise, and the fragile idea of quality.",
    image: { src: "/images/polyphony/pia-nino.jpg", width: 2048, height: 1454 },
    archiveSlug: "pia-nino",
  },
  {
    no: 9,
    slug: "daydreaming-n1",
    title: "Daydreaming N1",
    year: 2026,
    medium: MEDIUM,
    heightCm: 62,
    widthCm: 86,
    priceUsd: 6000,
    status: "available",
    note: "Figures drift through a theatre of patterned dresses, carpets and puppets, each lost in a private reverie.",
    image: { src: "/images/polyphony/daydreaming-n1.jpg", width: 1260, height: 888 },
  },
  {
    no: 10,
    slug: "daydreaming-n2",
    title: "Daydreaming N2",
    year: 2026,
    medium: MEDIUM,
    heightCm: 62,
    widthCm: 86,
    priceUsd: 6000,
    status: "available",
    note: "The second daydream — a ladder, a bathtub, a broom and a garden of floral fabric hold a restless company together.",
    image: { src: "/images/polyphony/daydreaming-n2.jpg", width: 1260, height: 893 },
  },
];

// ---------- helpers ----------

export const getPolyphonyWork = (slug: string) =>
  polyphonyWorks.find((w) => w.slug === slug);

export const getPolyphonyWorkByArchiveSlug = (archiveSlug: string) =>
  polyphonyWorks.find((w) => w.archiveSlug === archiveSlug);

export const formatUsd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const toIn = (cm: number) => (cm / 2.54).toFixed(1);

export const formatDimensions = (w: Pick<PolyphonyWork, "heightCm" | "widthCm">) =>
  `${w.heightCm} × ${w.widthCm} cm`;

export const formatDimensionsIn = (w: Pick<PolyphonyWork, "heightCm" | "widthCm">) =>
  `${toIn(w.heightCm)} × ${toIn(w.widthCm)} in`;

export const catalogueNo = (n: number) => String(n).padStart(2, "0");

export const STATUS_LABEL: Record<WorkStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

/** Prefilled message for WhatsApp / email hand-off. */
export const inquiryMessage = (w?: PolyphonyWork, url?: string) =>
  w
    ? `Hello, I am interested in "${w.title}" (${w.year}) by Nino Devdariani — Polyphony, cat. ${catalogueNo(w.no)}, ${formatUsd(w.priceUsd)}.${url ? ` ${url}` : ""}`
    : `Hello, I am interested in the Polyphony collection by Nino Devdariani.${url ? ` ${url}` : ""}`;

export const whatsappHref = (text: string) =>
  `https://wa.me/${STUDIO_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailtoHref = (subject: string, body: string) =>
  `mailto:${STUDIO_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
