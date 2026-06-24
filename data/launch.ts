// ============================================================
//  Nino D — Launch configuration (single source of truth)
//  Change the date and the EDITIONS_OPEN flag here only.
// ============================================================

/** The moment Edition 01 opens. Tbilisi time (UTC+4). */
export const LAUNCH_DATE = new Date("2026-09-25T18:00:00+04:00");

/** Human-readable date shown across the site. */
export const LAUNCH_DATE_LABEL = "September 25, 2026";

/** Short month label for softer references. */
export const LAUNCH_MONTH_LABEL = "September";

/**
 * Phase switch.
 *  false = pre-launch  → Join the waitlist is the primary action,
 *                        the Claim / Vault / checkout flow is dormant.
 *  true  = open        → Claim is live, The Vault returns to the nav.
 * Flip to `true` on launch day.
 */
export const EDITIONS_OPEN = false;
