import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { Pet } from './pet';

export interface Consulta {
  data: string;
  horario: string;
  pet: Pet;
  vet: Veterinario;
}
