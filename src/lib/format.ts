// Dates are formatted in the en-CA long style (e.g. "June 14, 2026"), matching
// the design system's UI kit. UTC to keep output machine-independent.
const fmt = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return fmt.format(date);
}
