// 1. Importa las utilidades de `astro:content`
import { defineCollection, z } from 'astro:content';

const articulosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
  }),
});

export const collections = {
  articulos: articulosCollection,
};