import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
});
