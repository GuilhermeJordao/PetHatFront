import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { AdministradorService } from 'src/app/Telas-Adm/service/administrador.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-veterinario',
  templateUrl: './editar-veterinario.component.html',
  styleUrls: ['./editar-veterinario.component.css'],
})
export class EditarVeterinarioComponent implements OnInit {
  id: number = 0;
  vet = {
    nome: [null],
    email: [null],
    senha: [null],
    crmvce: [null],
    telefone: [null],
    dataPortariaHabilitacao: [null],
  };
  veterinario: Veterinario | undefined;
  form: FormGroup;
  constructor(
    private localPagina: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adm: AdministradorService
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      email: [null],
      senha: [null],
      telefone: [null],
    });
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.adm.buscarPorId(this.id).subscribe((dados) => {
        this.vet = {
          nome: (dados as any).nome,
          email: (dados as any).email,
          senha: (dados as any).senha,
          crmvce: (dados as any).crmvce,
          telefone: (dados as any).telefone,
          dataPortariaHabilitacao: (dados as any).dataPortariaHabilitacao,
        };
      });
      console.log(this.id);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.adm.buscarPorId(this.id).subscribe((data) => {
      if (this.form.value.nome === null) {
        this.form.value.nome = (data as any).nome;
      }

      if (this.form.value.email === null) {
        this.form.value.email = (data as any).email;
      }

      if (this.form.value.senha === null) {
        this.form.value.senha = (data as any).senha;
      }

      if (this.form.value.telefone === null) {
        this.form.value.telefone = (data as any).telefone;
      }

      console.log(this.form.value);

      this.adm.alterarPerfil(this.id, this.form.value).subscribe((data) => {
        console.log(data);
        localStorage.setItem('email', data.email);
        console.log('Usuário atualizado com sucesso!');
      });
    });
    this.localPagina.back();
  }
}
