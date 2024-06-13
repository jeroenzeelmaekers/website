const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Newsreader', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      textColor: {
        main: 'rgb(var(--color-text-main) / <alpha-value>)',
      },
      backgroundColor: {
        main: 'rgb(var(--color-bg-main) / <alpha-value>)',
        muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
      },
      borderColor: {
        main: 'rgb(var(--color-border-main) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
