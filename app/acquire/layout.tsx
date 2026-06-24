import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acquire — Inquiries & Private Viewings",
  description:
    "Inquire about original paintings and limited editions by Nino Devdariani — availability, private viewings, and collector acquisition for Nino D works.",
  alternates: { canonical: "/acquire" },
};

export default function AcquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
