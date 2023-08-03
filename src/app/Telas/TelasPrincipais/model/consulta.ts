import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { Pet } from './pet';

export interface Consulta {
  _id: number;
  hora: string;
  dataConsulta: string;
  pet: Pet;
  veterinario: Veterinario;
  statusConsulta: string;
}
