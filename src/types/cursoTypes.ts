// Define una interfaz para los datos de los módulos
export interface Modulo {
    NUMERO: string;
    NOMBRE: string;
    DESCRIPCION: string;
  }
  
export  interface Curso {
    NOMBRE: string;
    CODIGO: string;
    TIPO: string;
    HORAS_CRONOLOGICAS: string;
    COMPETENCIA_DESARROLLAR: string;
    MODULO: Modulo[];
  }

export interface Cursos {
    cursos: Curso[];
  }