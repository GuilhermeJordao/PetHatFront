import { Cliente } from './cliente';

export interface Pet {
  _id: number;
  nome: string;
  especie: string;
  sexo: string;
  raca: string;
  idade: number;
  cliente: Cliente;
}
