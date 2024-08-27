// src/func/cursoUtils.ts

// Definir el tipo de clave para los cursos
export type TipoCursoKey = "Sincrónico" | "Asincrónico" | "Presencial" | "Todos";

// Definir los colores asociados a cada tipo de curso
export const tipoCursoColores: Record<TipoCursoKey, string> = {
  Sincrónico: "#FDC115",  // color dorado
  Asincrónico: "#FF4500", // color rojo anaranjado
  Presencial: "#DB1A5D",  // color azul violeta
  Todos: "#643090",       // color púrpura
};

// Función para ajustar el tipo de curso y obtener su color correspondiente
export function ajustarTipoCurso(tipoCurso: string): string {
  const tipo = tipoCurso.replace("Curso ", "") as TipoCursoKey;
  return tipoCursoColores[tipo] ?? "#FFFFFF"; // Utiliza el operador Nullish coalescing para manejar claves no definidas
}
