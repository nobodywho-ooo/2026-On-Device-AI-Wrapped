// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages on a custom domain (see .github/workflows/deploy.yml).
  site: 'https://2026.nobodywho.ai',
  vite: {
    plugins: [tailwindcss()]
  }
});
