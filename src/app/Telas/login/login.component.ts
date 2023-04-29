import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { StorageService } from '../service/storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  sucessoMensagem = false;
  erroMensagem = false;
  form: FormGroup;
  dados: any;
  cliente: Cliente | undefined;
  storage: StorageService | undefined;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private formBuild: FormBuilder // private localPagina: Location
  ) {
    this.form = this.formBuild.group({
      email: [null],
      senha: [null],
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);

    if (
      this.form.value.email === null ||
      this.form.value.email === '' ||
      this.form.value.senha === null ||
      this.form.value.senha === ''
    ) {
      this.errado();
    } else {
      this.clienteService.login(this.form.value).subscribe({
        next: (dados) => {
          console.log(dados);
          console.log(this.form.valid);

          if (dados === true) {
            this.correto();
          }
          if (dados === false) {
            this.errado();
          }
        },

        error: (e) => this.errado(),
      });
    }
  }

  private correto() {
    this.sucessoMensagem = true;
    localStorage.setItem('email', this.form.value.email);
    setTimeout(() => {
      this.sucessoMensagem = false;
      this.router.navigate([`/InicialUsu`]);
    }, 2000);
  }

  private errado() {
    this.erroMensagem = true;
    setTimeout(() => {
      this.erroMensagem = false;
    }, 5000);
  }
}
