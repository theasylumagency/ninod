# Polyphony — ჩიკაგოსთვის (Spectrum Chicago, 7–10 ოქტომბერი 2026)

## რა გაკეთდა

**სტრუქტურა — არქივი ხელუხლებელია.** პოლიფონია ცალკე კოლექციაა, საკუთარი მონაცემებით (`data/polyphony.ts`) და გვერდებით:

- `/polyphony` — კოლექციის გვერდი: hero, სტეიტმენტი, 10 ნამუშევარი ფასით, კომპაქტური price list, გამოფენის საათები, ზოგადი ფორმა.
- `/polyphony/<slug>` — თითოეული ნამუშევრის გვერდი: სრული (დაუჭრელი) სურათი, ტექ. მონაცემები (სმ + ინჩი), ფასი, სტატუსი, ნამუშევარზე მიბმული ფორმა.
- 3 ნამუშევარი უკვე არქივშია და ერთმანეთზე ბმულით არის დაკავშირებული (დუბლირების გარეშე):
  - Art Textile ↔ არქივის **Textile**
  - Down on the Ground ↔ არქივის **AI** (იგივე სურათია!)
  - Pia-Nino ↔ არქივის **Pia-Nino**
- ამ სამი არქივის გვერდზე ჩნდება ბლოკი "On view — Polyphony · ფასი · Price & availability".
- ნავიგაცია: Polyphony ჰედერში (პირველი) და ფუტერში; მთავარ გვერდზე hero-ს შემდეგ Polyphony-ს ბლოკი; announce bar → Polyphony.
- sitemap, Open Graph (ნამუშევრის სურათით), JSON-LD (VisualArtwork + Offer, ExhibitionEvent).

**დაკავშირების სისტემა (გადახდის გარეშე).** ყველა ნამუშევარს აქვს მოკლე ფორმა: "Acquire / Reserve / Ask a question / See it at the fair" + სახელი, email, ტელეფონი (არასავალდებულო), შეტყობინება. ყოველთვის ჩანს პირდაპირი WhatsApp (შეტყობინება წინასწარ შევსებულია ნამუშევრის სახელით და ფასით) და email.

- `/api/inquiry` აგზავნის **Telegram**-ში და/ან **Email**-ზე (Resend) — რაც დაკონფიგურირდება.
- თუ არცერთი არ არის დაკონფიგურირებული ან ვერ გაიგზავნა, ვიზიტორს ეჩვენება "One last step" — მზა ტექსტი + ღილაკები "Send via WhatsApp / Email". ასე რომ შეტყობინება არასდროს იკარგება ჩუმად.
- სარეზერვო ასლი იწერება `data/inquiries.jsonl`-ში (თუ სერვერზე ჩაწერა შესაძლებელია). ეს ფაილი და `waitlist.jsonl` დაემატა `.gitignore`-ში.
- `/acquire` გვერდზეც ფორმა ახლა რეალურად აგზავნის (მანამდე მხოლოდ იმიტირებდა გაგზავნას) და ყალბი კონტაქტები (studio@ninod.com, +44…) შეიცვალა რეალურით.

**ანალიტიკა — GA4 `G-PSS9WZ9ZL0`** (მხოლოდ production build-ში, ლოკალური dev არ აბინძურებს მონაცემებს):

| Event | როდის |
|---|---|
| page_view | ავტომატურად, ყველა გვერდზე (enhanced measurement) |
| view_item_list | კოლექციის გვერდის ნახვა |
| select_item | ნამუშევარზე დაკლიკება |
| view_item | ნამუშევრის გვერდის ნახვა (ფასით, USD) |
| inquiry_start | ფორმის შევსება დაიწყო |
| generate_lead | შეტყობინება გაიგზავნა ✅ |
| inquiry_fallback | ავტომატური გაგზავნა ვერ მოხერხდა → WhatsApp/email |
| contact_click | WhatsApp / email დაკლიკება (`method`) |
| polyphony_entry, archive_link_click, inquiry_click | შიდა ნავიგაცია |

ნამუშევრები იგზავნება როგორც GA4 e-commerce **items**, ამიტომ GA-ში *Reports → Monetization → E-commerce purchases* გაჩვენებთ **Items viewed** თითოეული ნამუშევრისთვის — ანუ პირდაპირ ჩანს, რომელი ნამუშევარი აინტერესებთ.

**ბეჭდვისთვის:** `tmp/polyphony-print/polyphony-qr-labels.pdf` (US Letter) — სტენდის ნიშანი დიდი QR-ით + 10 ეტიკეტი (სათაური, წელი, ტექნიკა, ზომა, ფასი, QR). QR-ებს აქვს UTM (`utm_source=spectrum_chicago`), ასე რომ GA-ში გამოფენიდან მოსული ვიზიტები ცალკე ჩანს — თითოეული ეტიკეტიც ცალ-ცალკე (`utm_content=label_05`). QR-ები შემოწმებულია, იკითხება. ⚠️ დაბეჭდვამდე საიტი უნდა იყოს დადეპლოიებული.

## Deploy-მდე (≈15 წუთი)

1. **Inquiry-ს მიწოდება** — მინიმუმ ერთი (იხ. `.env.example`):
   - **Telegram** (რეკომენდებული გამოფენისთვის — მყისიერად ტელეფონზე): @BotFather → `/newbot` → token; ბოტს მიწერეთ რამე, შემდეგ `https://api.telegram.org/bot<TOKEN>/getUpdates` → `chat.id`. ჰოსტზე: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. ნინოს და თქვენ ორივეს რომ მოგდიოდეთ — ჯგუფი + ბოტი ჯგუფში.
   - **Email**: resend.com → ninod.space დომენის ვერიფიკაცია → `RESEND_API_KEY`.
2. დარწმუნდით, რომ **studio@ninod.space** რეალურად იღებს წერილებს და **+995 574 40 60 61**-ზე არის WhatsApp.
3. Build + deploy. Deploy-ის შემდეგ ერთი სატესტო inquiry და შემოწმება GA → Realtime.

## GA-ში (ერთხელ, ~5 წუთი)

- Admin → Data display → Events: `generate_lead` და `contact_click` → **Mark as key event**.
- Admin → Custom definitions → event-scoped dimensions: `lead_source`, `intent`, `method`, `placement`.
- Admin → Data collection → Data retention → **14 months** (default 2 თვეა).
- გამოფენის დღეებში: Reports → Realtime; QR ტრაფიკი: Acquisition → Traffic acquisition → session source = `spectrum_chicago`.

## გამოფენის დროს

- გაყიდული/დაჯავშნილი: `data/polyphony.ts` → `status: "sold"` ან `"reserved"` → deploy. გაყიდულს ეხატება წითელი წერტილი, ფასი იმალება, ფორმა ქრება.
- სტენდის ნომერი: `exhibition.booth` (ახლა ცარიელია — ჩაწერეთ და გამოჩნდება ყველგან).
- გამოფენის შემდეგ: `featured: false` → announce bar და მთავარი გვერდი ბრუნდება ძველ მდგომარეობაში.

## ნინოსთან დასაზუსტებელი

1. **AI = Down on the Ground** — ერთი და იგივე ნამუშევარია, განსხვავებული სათაურით. ასევე წელი: არქივში იყო 2025, price list-ში 2024. არქივის URL და სათაური არ შემიცვლია; ტექნიკური მონაცემები (ქაღალდი, ზომა, წელი) price list-ის მიხედვით განვაახლე სამივე გადაკვეთილ ნამუშევარზე — არქივში ეწერა "Acrylic and ink on canvas", price list-ში — ქაღალდი.
2. **ტექსტები** — Polyphony-ს სტეიტმენტი და ნამუშევრების ერთწინადადებიანი აღწერები ჩემი დრაფტია (ვიზუალურ დაკვირვებაზე დაყრდნობით). Excel-ში მხოლოდ ტექ. მონაცემები და ფასები იყო. ნინომ გადახედოს — ყველაფერი `data/polyphony.ts`-შია (`note`, `statement`).
3. "Shipping is arranged individually with each collector" — დავტოვოთ თუ სხვა პირობებია?
4. ფასები ჩარჩოთი თუ ჩარჩოს გარეშეა?

## სხვა რაც შევნიშნე (არ შემიცვლია)

- launch date (25 სექტემბერი) გავიდა, `EDITIONS_OPEN = false` — announce bar ძველ countdown-ს აჩვენებდა; ახლა იქ Polyphony-ა.
- Instagram/Pinterest ბმულები ფუტერში ისევ placeholder-ებია.
- Privacy გვერდზე ეწერა "London studio" — ამოვიღე "London" და დავამატე ორი წინადადება Google Analytics-სა და ფორმებზე.
- შემოწმება: `tsc` სუფთაა, production build გადის (ჩემს გარემოში Google Fonts დაბლოკილია, ამიტომ ვამოწმებდი `next build --webpack`-ით; თქვენთან ჩვეულებრივი `npm run build` იმუშავებს). `npm run lint`-ის 3 შეცდომა ჩემამდეც იყო (Countdown, VaultContext, VisualArchive) — ახალ ფაილებში შეცდომა არ არის.
