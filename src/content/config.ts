// 1. Importa las utilidades de `astro:content`
import { defineCollection, z, reference } from 'astro:content';

const articulosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  articulos: articulosCollection,
};