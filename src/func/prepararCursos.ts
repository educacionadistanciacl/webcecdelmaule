import type { Curso, Cursos } from '../types/cursoTypes';

export function prepararCursos(datos: any): Cursos {
  const cursos: Curso[] = datos.map((dato: any) => ({
    NOMBRE: dato.NOMBRE,
    TIPO: dato.TIPO
  }));

  return { cursos };
}