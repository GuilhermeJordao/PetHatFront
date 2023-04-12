import { Component } from '@angular/core';
import { Veterinario } from '../model/veterinario';
import { Location } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { AdministradorService } from '../service/administrador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabela-crud-veterinario',
  templateUrl: './tabela-crud-veterinario.component.html',
  styleUrls: ['./tabela-crud-veterinario.component.css'],
})
export class TabelaCrudVeterinarioComponent {
  veterinario: Observable<Veterinario[]>;
  id: number = 0;

  displayedColumns = [
    'nome',
    'email',
    'crmvce',
    'telefone',
    'dataPortariaHabilitacao',
    'actions',
  ];

  constructor(
    private admService: AdministradorService,
    private localPagina: Location,
    private router: Router
  ) {
    this.veterinario = this.admService.listar();
  }

  editar(vet: Veterinario) {
    this.router.navigate([`/Editar/${vet._id}`]);
  }

  deletar(vet: Veterinario) {
    window.location.reload();
    this.admService.deletarPerfil(vet._id).subscribe();
  }

  sairConta() {
    this.router.navigate([`/LoginADM`]);
    localStorage.clear();
  }
}
