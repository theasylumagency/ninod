import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nino D handles collector data, inquiries, and confidentiality across the platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-2xl mx-auto space-y-8 font-sans">
      <h1 className="font-serif text-3xl uppercase tracking-wider">Privacy Policy</h1>
      <p className="text-xs text-stone-grey leading-relaxed">
        Nino D respects your privacy. All collector data, inquiry transcripts, and transaction records are treated with the highest degree of confidentiality and are never shared with third parties.
      </p>
      <p className="text-xs text-stone-grey leading-relaxed">
        We collect only the basic metadata required to process inquiries and manage standard communications from our studio.
      </p>
      <p className="text-xs text-stone-grey leading-relaxed">
        Inquiry forms send your name, email, optional phone number and message to the studio so we can reply. They are not used for anything else.
      </p>
      <p className="text-xs text-stone-grey leading-relaxed">
        This website uses Google Analytics to understand, in aggregate, which pages and works visitors view. Google Analytics uses cookies; you can block them in your browser settings or with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-deep-oxblood">Google Analytics opt-out add-on</a>.
      </p>
    </div>
  );
}
