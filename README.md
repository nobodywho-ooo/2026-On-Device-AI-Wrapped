![Preview](./preview.png)

# On-Device AI Wrapped 2026

A Spotify-Wrapped-style recap of the year in on-device and local AI, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Navigate with scroll, the arrow keys, or by clicking the progress bar at the top.

## Editing the news

Each story is **one Markdown file** in [`src/content/news/`](src/content/news/). Slides are sorted by `date`, so the filename is only for your convenience.

```md
---
title: llama.cpp hits 1.0.0          # headline
date: 2026-11-13                     # YYYY-MM-DD, used for ordering
category: tooling                    # model | tooling | platform | industry
org: ggml-org                        # who shipped it (use "A × B" for two)
emoji: 🦙                            # big icon on the slide
stat:
  value: v1.0.0                      # the giant Wrapped-style number
  label: semantic versioning for libllama and ggml, at last
summary: One or two sentences.
highlights:                          # optional bullet points
  - Removes 35 deprecated functions
links:                               # optional, first one is highlighted
  - label: Release notes
    url: https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0
theme: lime                          # lime | pink | violet | orange | cyan | blue | yellow | black
draft: false                         # true hides the slide
---

Optional extra paragraphs in Markdown go here.
```

- **Add a story:** copy an existing file, rename it, edit the frontmatter.
- **Remove a story:** delete the file, or set `draft: true`.
- The "year in numbers" slide updates automatically.
- Frontmatter is validated by [`src/content.config.ts`](src/content.config.ts), so a typo fails the build with a clear message.

## Bonus tracks

Shorter stories go on the "Wait, there's more…" slide near the end. Each is one file in [`src/content/more/`](src/content/more/):

```md
---
title: Ollama switches to MLX on Macs
date: 2026-03-30
org: Ollama
emoji: 🍏
summary: One sentence.
link:
  label: Ollama blog
  url: https://ollama.com/blog/mlx
---
```

The slide is hidden automatically when the folder is empty.

## Other files

| File | What it controls |
| --- | --- |
| [`src/site.config.ts`](src/site.config.ts) | Year, title, tagline, bonus-tracks heading, closing "Brought to you by" slide |
| [`src/themes.ts`](src/themes.ts) | Slide colour palettes (add your own) |
| [`src/pages/index.astro`](src/pages/index.astro) | Intro, stats, bonus tracks and closing slides |
| [`src/components/NewsSlide.astro`](src/components/NewsSlide.astro) | Layout of a news slide |
