"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";

function AcquireContent() {
  const searchParams = useSearchParams();
  const interestParam = searchParams?.get("interest") || "Original Work";
  const itemParam = searchParams?.get("item") || "";

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column - Details */}
      <div className="col-span-1 md:col-span-4 space-y-6">
        <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-ink-black leading-tight">
          Acquire
        </h1>
        <p className="text-xs text-stone-grey leading-relaxed tracking-wide">
          Please fill out the inquiry form. If you are interested in a specific painting or a limited edition silk carré, specify the archive title or catalog number so that our representative can retrieve the correct file.
        </p>

        {itemParam && (
          <div className="bg-paper-grey/50 border border-stone-grey/25 p-4 space-y-2">
            <p className="text-[9px] uppercase tracking-widest text-stone-grey font-medium">Selected Archive Item</p>
            <p className="font-serif text-sm text-deep-oxblood font-semibold italic">{itemParam}</p>
            <p className="text-[9px] text-stone-grey uppercase tracking-widest font-medium">Interest Area: {interestParam}</p>
          </div>
        )}

        <div className="space-y-2 pt-6 border-t border-stone-grey/15">
          <p className="text-[9px] uppercase tracking-widest text-stone-grey font-medium">Studio Representation</p>
          <p className="text-xs font-sans text-ink-black font-medium">studio@ninod.com</p>
          <p className="text-xs font-sans text-ink-black font-medium">+44 (0) 20 7946 0192</p>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="col-span-1 md:col-span-8 w-full">
        <InquiryForm />
      </div>
    </div>
  );
}

export default function AcquirePage() {
  return (
    <div className="w-full flex flex-col bg-warm-ivory text-ink-black py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <div className="flex items-center gap-4">
        <span className="font-serif text-deep-oxblood text-sm font-semibold tracking-widest">Inquiry</span>
        <span className="h-[1px] w-12 bg-stone-grey/30" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">Initiate Acquisition</span>
      </div>
      <Suspense fallback={<div className="text-xs uppercase tracking-widest text-stone-grey animate-pulse">Retrieving archive details...</div>}>
        <AcquireContent />
      </Suspense>
    </div>
  );
}
