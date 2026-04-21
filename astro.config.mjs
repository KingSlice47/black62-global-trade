// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.black62.co.za',
  build: {
    assets: 'assets/_astro',
  },
});
