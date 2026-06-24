/** Format an EUR amount the way the studio displays prices. */
export function formatEur(amount: number) {
  return `€${amount.toLocaleString("en-US")}`;
}
