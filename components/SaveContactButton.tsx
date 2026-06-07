export default function SaveContactButton({ className }: { className?: string }) {
    return (
        <a
            href="/contact-card"
            className={className}
        >
            Save Contact Card
        </a>
    );
}