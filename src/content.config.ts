import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themeNames } from './themes';

/**
 * Every news item is one Markdown file in `src/content/news/`.
 * The frontmatter below is validated at build time, so a typo in a field
 * name or an unknown theme fails loudly instead of silently breaking a slide.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    /** Headline shown on the slide. */
    title: z.string(),
    /** Day the news happened (YYYY-MM-DD). Slides are sorted by this. */
    date: z.coerce.date(),
    /** Used for the stats slide and the little tag on each slide. */
    category: z.enum(['model', 'tooling', 'platform', 'industry']),
    /** Who shipped it. */
    org: z.string(),
    /** One emoji used as the slide's big icon. */
    emoji: z.string(),
    /** The big Wrapped-style number on the slide. */
    stat: z.object({
      value: z.string(),
      label: z.string(),
    }),
    /** One or two sentences. */
    summary: z.string(),
    /** Short bullet points (3–4 reads best). */
    highlights: z.array(z.string()).default([]),
    /** Sources / further reading. The first one is the main link. */
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    /** Colour palette for the slide, see `src/themes.ts`. */
    theme: z.enum(themeNames),
    /** Set to true to hide an item without deleting the file. */
    draft: z.boolean().default(false),
  }),
});

/**
 * Shorter stories for the "Bonus tracks" slide: one Markdown file each in
 * `src/content/more/`, shown as small cards sorted by date.
 */
const more = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/more' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    org: z.string(),
    emoji: z.string(),
    /** One sentence. */
    summary: z.string(),
    link: z.object({ label: z.string(), url: z.string().url() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, more };
