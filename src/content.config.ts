import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themeNames } from './themes';
import { sectionIds } from './sections';

/** Brand logos available in `src/components/Logo.astro`. */
const logo = z.enum(['apple', 'google', 'bonsai', 'gemma', 'liquid', 'qwen', 'pytorch']).optional();

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
    /** Optional brand logo shown instead of the emoji, see `src/components/Logo.astro`. */
    logo,
    /** The big Wrapped-style number on the slide. Required unless the slide has a `timeline` or `groups`. */
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
    /**
     * Like `timeline`, but each stop on the line is a group of smaller dated items.
     * Groups alternate above and below the line, so it fits more on one slide.
     */
    groups: z
      .array(
        z.object({
          /** Short heading, e.g. "New bindings". */
          name: z.string(),
          /** Short labels, each with its own date. */
          items: z.array(z.object({ label: z.string(), date: z.coerce.date() })).min(1),
          /** Optional sentence under the items. */
          detail: z.string().optional(),
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
    /** Set the title in the NobodyWho wordmark style, without the icon. Use with title `nobodywho`. */
    wordmark: z.boolean().default(false),
    /** Colour palette for the slide, see `src/themes.ts`. */
    theme: z.enum(themeNames),
    /** Set to true to hide an item without deleting the file. */
    draft: z.boolean().default(false),
  }).refine((d) => d.stat || d.timeline || d.groups, { message: 'A news item needs a `stat`, a `timeline` or `groups`.' }),
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
    /** Optional brand logo shown instead of the emoji. */
    logo,
    /** One sentence. */
    summary: z.string(),
    link: z.object({ label: z.string(), url: z.string().url() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, more };
