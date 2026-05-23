"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Original Work",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    "Original Work",
    "The Wearable Archive",
    "Editions",
    "Collaboration",
    "Gallery / Press Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", interest: "Original Work", message: "" });
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-paper-grey/50 border border-stone-grey/20 min-h-[400px] transition-all duration-500 ease-in-out">
        {/* Archival Seal Success Animation */}
        <div className="w-16 h-16 rounded-full border border-deep-oxblood flex items-center justify-center mb-6 animate-pulse">
          <span className="font-serif text-deep-oxblood text-lg font-bold">D</span>
        </div>
        <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-ink-black mb-4">
          Inquiry Received
        </h3>
        <p className="text-xs text-stone-grey leading-relaxed max-w-sm mb-8">
          Thank you for initiating contact. An archival number has been assigned to your message, and a studio representative will reach out to you within 48 business hours.
        </p>
        <button
          onClick={handleReset}
          className="text-xs uppercase tracking-[0.2em] text-stone-grey hover:text-ink-black transition-colors font-medium"
        >
          Begin another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col space-y-8 bg-paper-grey/30 border border-stone-grey/20 p-8 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="YOUR FULL NAME"
            className="bg-transparent border-b border-stone-grey/30 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-deep-oxblood transition-colors placeholder:text-stone-grey/40 text-ink-black"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="YOUR EMAIL ADDRESS"
            className="bg-transparent border-b border-stone-grey/30 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-deep-oxblood transition-colors placeholder:text-stone-grey/40 text-ink-black"
          />
        </div>
      </div>

      {/* Interest Dropdown */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="interest" className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
          Area of Interest
        </label>
        <div className="relative">
          <select
            id="interest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full bg-transparent border-b border-stone-grey/30 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-deep-oxblood transition-colors cursor-pointer text-ink-black appearance-none"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-warm-ivory text-ink-black uppercase text-[10px] tracking-wider">
                {opt}
              </option>
            ))}
          </select>
          {/* Custom Down Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-stone-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] text-stone-grey font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="PLEASE DESCRIBE YOUR INQUIRY IN DETAIL..."
          className="bg-transparent border-b border-stone-grey/30 py-2 text-xs tracking-wide focus:outline-none focus:border-deep-oxblood transition-colors resize-none placeholder:text-stone-grey/40 text-ink-black leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto self-start bg-ink-black text-warm-ivory text-xs uppercase tracking-[0.25em] font-medium py-4 px-10 hover:bg-deep-oxblood transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-3 w-3 text-warm-ivory" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
