"use client";

import Link from "next/link";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires one analytics event when the page/section mounts. */
export function TrackOnMount({ event, params }: { event: string; params: Record<string, unknown> }) {
  useEffect(() => {
    track(event, params);
    // Fire once per mount; params are static per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
  return null;
}

/** A Next.js Link that records a click event before navigating. */
export function TrackedLink({
  event,
  params,
  ...props
}: React.ComponentProps<typeof Link> & { event: string; params?: Record<string, unknown> }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, params);
        props.onClick?.(e);
      }}
    />
  );
}

/** A plain anchor (WhatsApp, email, tel, external) that records a click event. */
export function TrackedAnchor({
  event,
  params,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { event: string; params?: Record<string, unknown> }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, params);
        props.onClick?.(e);
      }}
    />
  );
}
