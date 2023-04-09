import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Veterinario } from '../model/veterinario';

@Component({
  selector: 'app-tabela-crud-veterinario',
  templateUrl: './tabela-crud-veterinario.component.html',
  styleUrls: ['./tabela-crud-veterinario.component.css'],
})
export class TabelaCrudVeterinarioComponent {
  veterinario: Veterinario[] = [
    {
      _id: 1,
      nome: 'Jose',
      email: 'teste@teste',
      senha: '123',
      crmvce: '09801 V',
      telefone: '089080',
      dataPortariaHabilitacao: '02/04/2020',
    },
  ];

  displayedColumns = [
    'nome',
    'email',
    'senha',
    'crmvce',
    'telefone',
    'dataPortariaHabilitacao',
  ];
  constructor() {}
}
