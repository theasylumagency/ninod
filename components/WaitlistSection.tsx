import Countdown from "@/components/Countdown";
import WaitlistForm from "@/components/WaitlistForm";
import { LAUNCH_DATE_CONFIRMED, LAUNCH_STATUS_LABEL } from "@/data/launch";

export default function WaitlistSection({
  kicker = "Edition 01",
  headline = "Be there before it opens.",
  subcopy = "Edition 01 is in preparation: one hundred numbered silk pieces, opened once, then closed forever. Join the reservation list — no payment now. When it opens, the list gets a private window to claim numbers before anyone else.",
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
          {kicker} · {LAUNCH_STATUS_LABEL}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide">{headline}</h2>
        <p className="max-w-md text-sm leading-relaxed tracking-wide text-warm-ivory/70">
          {subcopy}
        </p>
        {LAUNCH_DATE_CONFIRMED && <Countdown variant="full" theme="dark" />}
        <div className="flex w-full flex-col items-center pt-2">
          <WaitlistForm source={source} theme="dark" cta="Reserve my place" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-warm-ivory/40">
            No payment now · First access · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
