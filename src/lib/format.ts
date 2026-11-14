// Frontmatter dates are parsed as UTC midnight, so format in UTC to avoid off-by-one days.
const dateFmt = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const monthFmt = new Intl.DateTimeFormat('en', { month: 'long', timeZone: 'UTC' });

export const formatDate = (d: Date) => dateFmt.format(d);
export const formatMonth = (d: Date) => monthFmt.format(d);

export const categoryLabels = {
  model: 'New model',
  tooling: 'Tooling',
  platform: 'Platform',
  industry: 'Industry',
} as const;
