import { Pet } from 'src/app/Telas/TelasPrincipais/model/pet';

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
}
