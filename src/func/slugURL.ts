export const slugReplace = (slug: string): string => {
    return slug
    .replace(/[^a-zA-Z0-9]+/g, '-')  // Reemplaza cualquier carácter no alfanumérico por guiones
    .replace(/-+/g, '-')             // Reemplaza múltiples guiones consecutivos por un solo guion
      .toLowerCase();       // Convierte a minúsculas
  };