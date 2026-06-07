"use client";

import { useState } from "react";

export default function SaveContactButton({ className }: { className?: string }) {
    const [loading, setLoading] = useState(false);

    const handleSaveContact = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. მოგვაქვს VCF ფაილი
            const response = await fetch('/contact-card');
            const blob = await response.blob();

            // 2. ვქმნით File ობიექტს
            const file = new File([blob], 'ninod_studio.vcf', { type: 'text/vcard' });

            // 3. ვამოწმებთ აქვს თუ არა მოწყობილობას გაზიარების მხარდაჭერა
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Nino D Studio Contact',
                });
            } else {
                // Fallback ძველ მეთოდზე (პირდაპირი გადმოწერა), თუ მოწყობილობას არ აქვს მხარდაჭერა
                window.location.href = '/contact-card';
            }
        } catch (error) {
            console.error("Error sharing contact:", error);
            // Fallback
            window.location.href = '/contact-card';
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleSaveContact}
            disabled={loading}
            className={className}
        >
            {loading ? "Opening..." : "Save Contact Card"}
        </button>
    );
}