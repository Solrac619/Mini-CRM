// src/types/Lead.ts
export interface Lead {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  creado_en: string; // fecha de creación
  estado: 'nuevo' | 'contactado' | 'descartado';
}
