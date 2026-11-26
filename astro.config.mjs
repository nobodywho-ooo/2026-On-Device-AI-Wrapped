// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed via Netlify on a custom domain (see netlify.toml).
  site: 'https://2026.nobodywho.ai',
  vite: {
    plugins: [tailwindcss()]
  }
});
