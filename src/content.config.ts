import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themeNames } from './themes';
import { sectionIds } from './sections';

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
    /** Day the news happened (YYYY-MM-DD). Slides are sorted by this within their chapter. */
    date: z.coerce.date(),
    /** Which chapter the slide belongs to, see `src/sections.ts`. */
    section: z.enum(sectionIds),
    /** Used for the stats slide and the little tag on each slide. */
    category: z.enum(['model', 'tooling', 'platform', 'industry']),
    /** Who shipped it. */
    org: z.string(),
    /** One emoji used as the slide's big icon. */
    emoji: z.string(),
    /** Optional brand logo shown instead of the emoji on single-slide chapters, see `src/components/Logo.astro`. */
    logo: z.enum(['apple', 'google']).optional(),
    /** The big Wrapped-style number on the slide. Required unless the slide has a `timeline`. */
    stat: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional(),
    /**
     * Turns the slide into a timeline of releases (see `src/components/TimelineSlide.astro`)
     * instead of the big-number layout. Entries are shown in date order.
     */
    timeline: z
      .array(
        z.object({
          /** Model name, e.g. "Qwen3.6". */
          name: z.string(),
          date: z.coerce.date(),
          /** Who shipped it, shown on slides that compare several companies. */
          org: z.string().optional(),
          /** Sizes or a short tag, e.g. "27B · 35B-A3B". */
          size: z.string().optional(),
          /** One short sentence. */
          detail: z.string(),
          /** Hugging Face page (model or collection). */
          url: z.string().url(),
        }),
      )
      .optional(),
    /** One or two sentences. */
    summary: z.string(),
    /** Short bullet points (3–4 reads best). */
    highlights: z.array(z.string()).default([]),
    /** Sources / further reading. The first one is the main link. */
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    /** Show a "Try it on your phone" button that opens the NobodyWho Chat app-store links, see `src/site.config.ts`. */
    tryOnPhone: z.boolean().default(false),
    /** Colour palette for the slide, see `src/themes.ts`. */
    theme: z.enum(themeNames),
    /** Set to true to hide an item without deleting the file. */
    draft: z.boolean().default(false),
  }).refine((d) => d.stat || d.timeline, { message: 'A news item needs a `stat` or a `timeline`.' }),
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
