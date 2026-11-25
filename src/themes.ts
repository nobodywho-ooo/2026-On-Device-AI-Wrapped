/**
 * Slide colour palettes. Pick one per news item with `theme:` in its frontmatter.
 * Class names are written out in full so Tailwind can find them.
 */
export const themes = {
  lime: {
    bg: 'bg-lime-300',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-lime-300',
    blob: 'bg-emerald-500',
  },
  violet: {
    bg: 'bg-violet-700',
    text: 'text-white',
    accent: 'bg-lime-300 text-zinc-950',
    blob: 'bg-fuchsia-400',
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-orange-300',
    blob: 'bg-yellow-300',
  },
  cyan: {
    bg: 'bg-cyan-300',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-cyan-300',
    blob: 'bg-blue-600',
  },
  blue: {
    bg: 'bg-blue-700',
    text: 'text-white',
    accent: 'bg-yellow-300 text-zinc-950',
    blob: 'bg-cyan-400',
  },
  yellow: {
    bg: 'bg-yellow-300',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-yellow-300',
    blob: 'bg-orange-500',
  },
  white: {
    bg: 'bg-white',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-white',
    blob: 'bg-zinc-300',
  },
  black: {
    bg: 'bg-zinc-950',
    text: 'text-white',
    accent: 'bg-lime-300 text-zinc-950',
    blob: 'bg-violet-600',
  },
  // Brand-matched palettes for slides that show a logo.
  qwen: {
    bg: 'bg-violet-200',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-violet-200',
    blob: 'bg-indigo-400',
  },
  gemma: {
    bg: 'bg-blue-950',
    text: 'text-white',
    accent: 'bg-blue-300 text-blue-950',
    blob: 'bg-blue-500',
  },
  pytorch: {
    bg: 'bg-red-100',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-red-100',
    blob: 'bg-red-400',
  },
  bonsai: {
    bg: 'bg-emerald-200',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-emerald-200',
    blob: 'bg-green-500',
  },
  liquid: {
    bg: 'bg-zinc-300',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-zinc-200',
    blob: 'bg-zinc-500',
  },
  // NobodyWho's garnet, cream and amber. Also used on the closing slide.
  nobodywho: {
    bg: 'bg-nw-ground',
    text: 'text-nw-ink',
    accent: 'bg-nw-accent text-nw-deep',
    blob: 'bg-nw-glow',
    /** Timeline cards; other themes use black cards. */
    card: 'bg-nw-deep text-nw-ink',
  },
} as const;

type Theme = (typeof themes)[keyof typeof themes];

/** Classes for timeline cards on a slide in this theme. */
export const cardClass = (t: Theme) => ('card' in t ? t.card : 'bg-zinc-950 text-white');

/** The NobodyWho wordmark: always lowercase "nobodywho", Inter Tight 600, tracked -0.035em. */
export const wordmarkClass = 'font-nw font-semibold tracking-[-0.035em]';

export type ThemeName = keyof typeof themes;
export const themeNames = Object.keys(themes) as [ThemeName, ...ThemeName[]];
