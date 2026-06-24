import Countdown from "@/components/Countdown";
import WaitlistForm from "@/components/WaitlistForm";
import { LAUNCH_DATE_LABEL } from "@/data/launch";

export default function WaitlistSection({
  kicker = "Edition 01",
  headline = "Be there before it opens.",
  subcopy = "Three editions. One hundred numbered pieces each. Opened once, then closed forever. Join the list for first access before Edition 01 opens to the public.",
  source = "site",
}: {
  kicker?: string;
  headline?: string;
  subcopy?: string;
  source?: string;
}) {
  return (
    <section
      id="waitlist"
      className="w-full scroll-mt-24 bg-ink-black text-warm-ivory px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center space-y-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-warm-ivory/60 font-medium">
          {kicker} · Opening {LAUNCH_DATE_LABEL}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide">{headline}</h2>
        <p className="max-w-md text-sm leading-relaxed tracking-wide text-warm-ivory/70">
          {subcopy}
        </p>
        <Countdown variant="full" theme="dark" />
        <div className="flex w-full flex-col items-center pt-2">
          <WaitlistForm source={source} theme="dark" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-warm-ivory/40">
            First access · No spam · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
