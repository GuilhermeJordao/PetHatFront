import { Pet } from 'src/app/Telas/TelasPrincipais/model/pet';
import { Receita } from './receita';
export interface Prontuario {
  data: string;
  horario: string;
  imunizacao: string;
  sinaisClinicos: string;
  exames: string;
  prescricao: string;
  diagnostico: string;
  observacao: string;
  pet: Pet;
  receita: Receita;
}
