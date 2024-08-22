import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// // https://astro.build/config
// export default defineConfig({
//   // Aquí puedes añadir otras configuraciones si las necesitas
// });

// ---------------- Adaptacion para vercel

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
