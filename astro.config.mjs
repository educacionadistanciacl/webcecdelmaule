import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',  // Puedes usar "server" o "hybrid" dependiendo de tus necesidades
  adapter: node({
    mode: 'standalone',
  }),
});
