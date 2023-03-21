import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sucessoMensagem = false;
  erroMensagem = false;
  form: FormGroup;
  dados: any;
  cliente: Cliente | undefined;

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

  onSubmit() {
    console.log(this.form.value);
    this.cliente = this.form.value;
    console.log(this.cliente);

    if (
      this.form.value.email === null ||
      this.form.value.email === '' ||
      this.form.value.senha === null ||
      this.form.value.senha === ''
    ) {
      this.erroMensagem = true;
      setTimeout(() => {
        this.erroMensagem = false;
      }, 5000);
    } else {
      this.clienteService.login(this.form.value).subscribe((dados) => {
        console.log(dados);
        if (dados) {
          this.sucessoMensagem = true;
          this.clienteService.termo = this.form.value.email;
          setTimeout(() => {
            this.sucessoMensagem = false;
            this.router.navigate([`/Perfil`]);
          }, 2000);
        } else if (dados == false) {
          this.erroMensagem = true;
          setTimeout(() => {
            this.erroMensagem = false;
          }, 5000);
        }
      });
    }
  }
}
