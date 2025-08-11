// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  trailingSlash: 'always',
  output: 'static',
  site: 'https://tonpseudo.github.io/invoicer/',
  base: '/invoicer/'
});
