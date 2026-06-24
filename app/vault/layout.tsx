import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collector Vault",
  description: "Private collector vault for Nino D editions.",
  robots: { index: false, follow: false },
};

export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
