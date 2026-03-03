// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Xyleee.github.io',
  base: '/magazineportfolio-astro/', // important!
  vite: {
    plugins: [tailwindcss()],
  },
});