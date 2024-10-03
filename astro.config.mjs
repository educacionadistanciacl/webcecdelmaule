import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'static',  // Puedes usar "server" o "hybrid" dependiendo de tus necesidades
  adapter: node({
    mode: 'standalone',
  }),
});

// import { defineConfig } from 'astro/config'

// export default defineConfig({
//   // tus opciones de configuración van aquí...
//   // https://docs.astro.build/es/reference/configuration-reference/
// })