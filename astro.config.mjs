import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ''
);

import sanity from '@sanity/astro';
import react from '@astrojs/react';

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    sanity({
      projectId: projectId,
      dataset: dataset,
      useCdn: false,
      apiVersion: '2024-07-24',
      studioBasePath: '/admin',
    }),
    react(),
  ],
});
