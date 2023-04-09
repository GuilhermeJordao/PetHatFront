import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usu',
  templateUrl: './perfil-usu.component.html',
  styleUrls: ['./perfil-usu.component.css'],
})
export class PerfilUsuComponent implements OnInit {
  perfil = {
    nome: [null],
    cpf: [null],
    email: [null],
    senha: [null],
  };
  id: any = 0;
  cliente: Cliente | undefined;
  form: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private localStorage: StorageService,
    private formBuilder: FormBuilder,
    private localPagina: Location,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      email: [null],
      senha: [null],
    });
  }

  ngOnInit() {
    this.clienteService.buscarIdPorEmail().subscribe((dados) => {
      this.id = dados;
      console.log(dados);

      this.clienteService.visualizarPerfil(this.id).subscribe((data) => {
        this.perfil = {
          nome: (data as any).nome,
          cpf: (data as any).cpf,
          email: (data as any).email,
          senha: (data as any).senha,
        };
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.clienteService.visualizarPerfil(this.id).subscribe((data) => {
      if (this.form.value.nome === null) {
        this.form.value.nome = data.nome;
      }

      if (this.form.value.cpf === null) {
        this.form.value.cpf = data.cpf;
      }

      if (this.form.value.email === null) {
        this.form.value.email = data.email;
      }

      if (this.form.value.senha === null) {
        this.form.value.senha = data.senha;
      }
      console.log(this.form.value);

      this.clienteService
        .alterarPerfil(this.id, this.form.value)
        .subscribe((data) => {
          console.log(data);
          localStorage.setItem('email', data.email);
          console.log('Usuário atualizado com sucesso!');
          window.location.reload();
        });
    });
  }

  deletarConta() {
    console.log(this.id);
    this.router.navigate([`/`]);
    this.clienteService.deletarPerifl(this.id).subscribe();
    localStorage.clear();
  }

  sairConta() {
    this.localPagina.back();
    localStorage.clear();
  }
}
