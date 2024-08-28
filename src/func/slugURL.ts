export const slugReplace = (slug: string): string => {
  if (!slug) return '';  // Si `slug` es `undefined` o `null`, devuelve una cadena vacía.

  return slug
    .normalize("NFD")                 // Normaliza el texto a la forma de descomposición canónica
    .replace(/[\u0300-\u036f]/g, '')  // Elimina los signos diacríticos (acentos)
    .replace(/\s+/g, '-')             // Reemplaza los espacios por guiones
    .replace(/[^a-zA-Z0-9-]+/g, '_')  // Reemplaza cualquier carácter no alfanumérico ni guion por subrayado
    .replace(/-+/g, '-')              // Reemplaza múltiples guiones consecutivos por un solo guion
    .toLowerCase();                   // Convierte a minúsculas
};
