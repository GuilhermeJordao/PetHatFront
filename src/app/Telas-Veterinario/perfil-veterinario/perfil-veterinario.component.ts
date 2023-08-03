import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { VeterinarioService } from '../service/veterinario.service';

@Component({
  selector: 'app-perfil-veterinario',
  templateUrl: './perfil-veterinario.component.html',
  styleUrls: ['./perfil-veterinario.component.scss'],
})
export class PerfilVeterinarioComponent {
  vet = {
    nome: [null],
    email: [null],
    senha: [null],
    crmvce: [null],
    telefone: [null],
    dataPortariaHabilitacao: [null],
  };
  id: any = 0;
  veterinario: Veterinario | undefined;

  constructor(private vetService: VeterinarioService, private router: Router) {}

  ngOnInit() {
    this.vetService.buscarIdPorEmail().subscribe((data) => {
      this.id = data;
      console.log(data);

      this.vetService.visualizarPerfil(this.id).subscribe((dados) => {
        this.vet = {
          nome: (dados as any).nome,
          email: (dados as any).email,
          senha: (dados as any).senha,
          crmvce: (dados as any).crmvce,
          telefone: (dados as any).telefone,
          dataPortariaHabilitacao: (dados as any).dataPortariaHabilitacao,
        };
      });
    });
  }
  sairConta() {
    this.router.navigate([`/LoginVeterinario`]);
    localStorage.clear();
  }
}
