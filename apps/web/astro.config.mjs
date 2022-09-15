import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [],
    ssr: {
      external: ['svgo'],
    },
  },
});
