import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { Pet } from './pet';

export interface Consulta {
  horario: string;
  pet: Pet;
  vet: Veterinario;
}
