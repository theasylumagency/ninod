# Nino D — Paintings that Leave the Wall

> A premium digital archive and digital experience platform for contemporary visual artist **Nino Devdariani**. 

This platform showcases Nino Devdariani's artistic output, spanning original visual art and physical wearable editions. The site transitions dynamically between a scarcity-focused pre-launch waitlist and an active checkout vault for limited-edition drops.

---

## 🎨 Project Philosophy & Concept

**Nino D** is built on the concept of art transitioning from traditional dimensions into tactile, wearable forms:
* **The Visual Archive:** Displays original paintings, gestures, figures, and sketches by Nino Devdariani. Visitors can explore the depth of the artwork and submit inquiries for acquiring original paintings.
* **The Wearable Archive:** Pairs original canvas art with physical, wearable silk creations (limited to 100 numbered pieces per edition, priced at €450). Each edition opens once and is closed forever when sold out.
* **The Launch Funnel:** During the pre-launch phase, the site runs on a countdown timer, directing all visitor intent to a unified Call-To-Action (CTA): joining the waitlist for exclusive early access to Edition 01.

---

## 🛠️ Tech Stack

This project is built using a modern, performant, and premium web design stack:

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
* **Libraries:** [React 19](https://react.dev/) (featuring Hooks, Context for Vault/Cart states)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
* **Typography:**
  * Serif: *Bodoni Moda* and *Cormorant Garamond* (Google Fonts via `next/font`)
  * Sans-Serif: *Inter* (Google Fonts via `next/font`)
* **Design System:** Custom warm, minimal layout utilizing a tailored color palette:
  * `warm-ivory` — Ivory background highlighting art tones
  * `ink-black` — Deep, elegant text and primary accents
  * `deep-oxblood` — Premium, high-contrast burgundy reserved for actions and highlights
  * `stone-grey` & `paper-grey` — Textures and metadata frames
* **SEO & Metadata:**
  * Dynamic, automated JSON-LD organizational and biographical schema injected in the layout.
  * Meta templates, canonical mappings, fully responsive opengraph images, custom robots.ts, and dynamically generated sitemap.ts.

---

## ⚙️ Configuration & Launch Control

The platform's phase, countdown timer, and waitlist state are managed from a single source of truth in [data/launch.ts](file:///e:/desk/web%20sites/niniko/data/launch.ts):

```typescript
// Tbilisi time (UTC+4) for opening Edition 01
export const LAUNCH_DATE = new Date("2026-09-25T18:00:00+04:00");

// Label shown site-wide
export const LAUNCH_DATE_LABEL = "September 25, 2026";
export const LAUNCH_MONTH_LABEL = "September";

// Phase switch: 
//   false = Pre-Launch Mode (Waitlist CTA active, Checkout Vault dormant)
//   true  = Launch Mode (Claim CTA active, Vault navigation active)
export const EDITIONS_OPEN = false;
```

---

## 📂 Project Structure

```bash
niniko/
├── app/                  # Next.js App Router Pages & Layouts
│   ├── about/            # Story behind Nino Devdariani and the brand
│   ├── acquire/          # Inquiry form page for inquiries and original paintings
│   ├── api/              # API routes (e.g. waitlist registration & inquiries)
│   ├── vault/            # Dormant checkout and cart processing logic
│   ├── visual-archive/   # Visual gallery of original paintings
│   ├── wearable-archive/ # Preview of wearable silk editions
│   ├── globals.css       # Core styling & Tailwind base directives
│   ├── layout.tsx        # Main layout, font loaders, and JSON-LD schema
│   └── page.tsx          # Homepage with hero slider and waitlist capture
├── components/           # Reusable components
│   ├── AnnounceBar.tsx   # Top site-wide notification bar (Launch Status)
│   ├── ClaimButton.tsx   # Checkout action button
│   ├── Countdown.tsx     # Custom ticking countdown timer targeting LAUNCH_DATE
│   ├── LogoMark.tsx      # SVG logo and typography elements
│   ├── VaultContext.tsx  # Cart & checkout state provider
│   ├── WaitlistForm.tsx  # Submission capture component for subscribers
│   └── WearableSlider.tsx# Custom slide-to-reveal canvas-to-silk viewer
├── data/                 # Static content configuration
│   ├── launch.ts         # Single source of truth for release timings & state
│   └── visualArchive.ts  # Catalog data for paintings and wearable mappings
└── package.json          # Dependency definition
```

---

## 🚀 Getting Started

To run the development server locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 🔒 License

Private repository. Copyright © 2026 Nino Devdariani. All rights reserved.
