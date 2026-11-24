// Frontmatter dates are parsed as UTC midnight, so format in UTC to avoid off-by-one days.
const dateFmt = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const monthFmt = new Intl.DateTimeFormat('en', { month: 'long', timeZone: 'UTC' });

export const formatDate = (d: Date) => dateFmt.format(d);
export const formatMonth = (d: Date) => monthFmt.format(d);

const shortMonthFmt = new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' });
/** "Feb – Aug" for a list of dates (or a single "Feb 24" when there is only one). */
export const formatDateRange = (dates: Date[]) => {
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime());
  if (sorted.length < 2) return sorted[0] ? formatDate(sorted[0]) : '';
  return `${shortMonthFmt.format(sorted[0])} – ${shortMonthFmt.format(sorted.at(-1)!)}`;
};

export const categoryLabels = {
  model: 'New model',
  tooling: 'Tooling',
  platform: 'Platform',
  industry: 'Industry',
} as const;

/**
 * Font size that keeps a big stat on one line: the usual size, capped so the
 * whole value fits the width of its container (needs a `@container` parent).
 * `perChar` is roughly how wide one character of the display font is, in em.
 */
export const statFontSize = (value: string, size: string, perChar = 0.56) =>
  `min(${size}, ${(100 / (value.length * perChar)).toFixed(1)}cqi)`;
