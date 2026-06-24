"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type VaultItem = {
  id: string;
  archiveNo: string;
  title: string;
  image: string;
  /** Price in EUR */
  price: number;
};

type VaultContextType = {
  items: VaultItem[];
  count: number;
  total: number;
  hydrated: boolean;
  claim: (item: VaultItem) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
};

const VaultContext = createContext<VaultContextType | undefined>(undefined);

const STORAGE_KEY = "ninod-vault";

export function VaultProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<VaultItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Restore the Vault from the browser on first mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as VaultItem[]);
    } catch {
      /* ignore corrupted storage */
    }
    setHydrated(true);
  }, []);

  // Persist the Vault whenever it changes.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [items, hydrated]);

  const claim = (item: VaultItem) =>
    setItems((prev) =>
      prev.some((i) => i.id === item.id) ? prev : [...prev, item]
    );

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const has = (id: string) => items.some((i) => i.id === id);

  const clear = () => setItems([]);

  const count = items.length;
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <VaultContext.Provider
      value={{ items, count, total, hydrated, claim, remove, has, clear }}
    >
      {children}
    </VaultContext.Provider>
  );
}

export function useVault() {
  const ctx = useContext(VaultContext);
  if (!ctx) throw new Error("useVault must be used within a VaultProvider");
  return ctx;
}

// Re-exported for convenience so client components can keep importing it
// from here; the implementation lives in a non-client module.
export { formatEur } from "@/lib/format";
