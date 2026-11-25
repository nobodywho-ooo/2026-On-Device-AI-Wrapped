import type { ThemeName } from './themes';

/**
 * Chapters of the recap, in the order they appear. Each news file picks one
 * with `section:` in its frontmatter; inside a chapter, slides are sorted by date,
 * unless the chapter lists an `order` of news file names (slides not listed follow, by date).
 * Each chapter opens with a "tracklist" slide in the given theme.
 */
export const sections = [
  {
    id: 'built-in',
    title: 'Built-in',
    subtitle: 'The models that ship with your phone\'s operating system, ready for any app to call.',
    theme: 'violet',
    /** Show the whole chapter on its opener slide instead of one slide per item. */
    single: true,
  },
  {
    id: 'pocket',
    title: 'Pocket-sized',
    subtitle: 'The race for smaller and smarter models.',
    theme: 'lime',
  },
  {
    id: 'laptop',
    title: 'Lap-sized',
    subtitle: 'Open models that turn a laptop into a serious local coding and agent machine.',
    theme: 'black',
  },
  {
    id: 'llama-cpp',
    title: 'The engine room',
    subtitle: 'The runtimes under local AI apps grew up: llama.cpp, Google\'s LiteRT-LM and PyTorch\'s ExecuTorch.',
    theme: 'blue',
    order: [
      '2026-05-29-llama-cpp-new-tricks',
      '2026-11-13-llama-cpp-1-0',
      '2026-10-29-nobodywho',
      '2026-04-07-executorch',
      '2026-04-02-litert-lm',
    ],
  },
] as const satisfies readonly {
  id: string;
  title: string;
  subtitle: string;
  theme: ThemeName;
  single?: boolean;
  order?: readonly string[];
}[];

export type SectionId = (typeof sections)[number]['id'];
export const sectionIds = sections.map((s) => s.id) as [SectionId, ...SectionId[]];
