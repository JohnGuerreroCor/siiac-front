import { CineDetallado } from './cine-detallado';
import { Facultad } from './facultad';

export class Programa {
  codigo!: number;
  snies!: number;
  nombre!: string;
  titulo!: string;
  nivelAcademicoCodigo!: number;
  nivelAcademico!: string;
  nivelFormacionCodigo!: number;
  nivelFormacion!: string;
  estadoSniesCodigo!: number;
  estadoSnies!: string;
  ciclosCodigo!: number;
  ciclos!: string;
  modalidadCodigo!: number;
  modalidad!: string;
  areaConocimientoCodigo!: number;
  areaConocimiento!: string;
  nbcCodigo!: number;
  nbc!: string;
  facultad!: Facultad;
  sede!: string;
  creditos!: number;
  tipoDuracionCodigo!: number;
  tipoDuracion!: string;
  duracion!: number;
  tipoAdmisionCodigo!: number;
  tipoAdmision!: string;
  cupos!: number;
  sitioWeb!: string;
  normaCodigo!: number;
  norma!: string;
  convenio!: number;
  fechaCreacion!: Date;
  fechaRegistroSnies!: Date;
  campoDetallado!: CineDetallado;
  institucionNombre!: string;
  institucionNit!: string;
  institucionIes!: number;
  institucionIesPadre!: number;
  estado!: number;
}