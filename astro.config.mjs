import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sentry from "@sentry/astro";
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), '');
const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind(), sanity({
    projectId: projectId,
    dataset: dataset,
    useCdn: false,
    apiVersion: '2024-07-24',
    studioBasePath: '/admin'
  }), react(), sentry({
      dsn: "https://a885771e6e438f673bf90c96b7b4c26f@o4507940920754176.ingest.de.sentry.io/4507940923310160",
      sourceMapsUploadOptions: {
        project: "website",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    })],
});
