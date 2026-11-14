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
  pink: {
    bg: 'bg-pink-400',
    text: 'text-zinc-950',
    accent: 'bg-zinc-950 text-pink-300',
    blob: 'bg-fuchsia-600',
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
  black: {
    bg: 'bg-zinc-950',
    text: 'text-white',
    accent: 'bg-lime-300 text-zinc-950',
    blob: 'bg-violet-600',
  },
} as const;

export type ThemeName = keyof typeof themes;
export const themeNames = Object.keys(themes) as [ThemeName, ...ThemeName[]];
