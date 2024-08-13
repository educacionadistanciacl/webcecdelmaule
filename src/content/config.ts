import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
