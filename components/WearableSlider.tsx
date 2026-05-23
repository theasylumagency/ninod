"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface Slide {
  id: string;
  label: string;
  image: string;
  alt: string;
}

const wearableSliderSlides: Slide[] = [
  {
    id: "slide-01",
    label: "01 — At the neck",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide1.png",
    alt: "Model wearing a Nino D silk carré at the neck",
  },
  {
    id: "slide-02",
    label: "02 — On the bag",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide2.png",
    alt: "Model with a Nino D silk carré tied to a handbag",
  },
  {
    id: "slide-03",
    label: "03 — In the hair",
    image: "/images/homepage/wearable/nino_d_wearable_art_slide3.png",
    alt: "Model wearing a Nino D silk carré in the hair",
  },
];

export default function WearableSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === wearableSliderSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? wearableSliderSlides.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center select-none"
      role="region"
      aria-label="Wearable Archive Gallery"
    >
      {/* Aspect Ratio 4:5 Box */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-paper-grey group">
        {wearableSliderSlides.map((slide, index) => {
          const isActive = index === currentIdx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={!isActive}
            >
              {isActive && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              )}
            </div>
          );
        })}

        {/* Minimal Editorial Controls Overlay */}
        <div className="absolute inset-x-0 bottom-6 z-20 px-8 flex justify-between items-center text-ink-black md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/20 flex items-center justify-center hover:bg-warm-ivory transition-colors focus:outline-none"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-warm-ivory/80 backdrop-blur-sm border border-stone-grey/20 flex items-center justify-center hover:bg-warm-ivory transition-colors focus:outline-none"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Label and Indicators */}
      <div className="w-full mt-4 flex items-center justify-between px-2 text-xs uppercase tracking-widest text-stone-grey">
        {/* Dynamic Label */}
        <span className="font-sans text-[11px] font-medium text-ink-black tracking-[0.2em] transition-all duration-300">
          {wearableSliderSlides[currentIdx].label}
        </span>

        {/* Indicators */}
        <div className="flex items-center gap-3">
          {wearableSliderSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIdx(index)}
              className={`h-[1px] transition-all duration-500 focus:outline-none ${
                index === currentIdx ? "w-8 bg-ink-black" : "w-4 bg-stone-grey/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
