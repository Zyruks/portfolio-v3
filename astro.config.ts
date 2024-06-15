import tailwind from '@astrojs/tailwind';
// Update to @astrojs/vercel/serverless if need SSR
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  adapter: vercel(),

  integrations: [tailwind()],
});
