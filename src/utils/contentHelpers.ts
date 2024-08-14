// src/utils/contentHelpers.ts
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

// Función para obtener artículos filtrados por entorno
export async function getFilteredArticles(): Promise<CollectionEntry<'articulos'>[]> {
  const articulosEntries = await getCollection("articulos");

  // Filtrar borradores en producción
  const filteredEntries = articulosEntries.filter(entry => {
    return import.meta.env.PROD ? entry.data.draft !== true : true;
  });

  return filteredEntries;
}
