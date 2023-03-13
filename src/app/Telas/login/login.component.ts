import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';

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

  constructor(
    private clienteService: ClienteService,
    private formBuild: FormBuilder // private localPagina: Location
  ) {
    this.form = this.formBuild.group({
      email: [null],
      senha: [null],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.value.email === null && this.form.value.senha === null) {
      this.erroMensagem = true;
      setTimeout(() => {
        this.erroMensagem = false;
      }, 5000);
    } else {
      this.clienteService.login(this.form.value).subscribe((dados) => {
        console.log(dados);
        if (dados) {
          this.sucessoMensagem = true;
          setTimeout(() => {
            this.sucessoMensagem = false;
          }, 5000);
        } else if (dados == false) {
          this.erroMensagem = true;
          setTimeout(() => {
            this.erroMensagem = false;
          }, 5000);
        }
      });
    }

    //     {
    //     next: (dados) => {
    //       console.log(dados);
    //       if (dados) {
    //         this.erroMensagem = true;

    //
    //       } else {
    //         this.sucessoMensagem = true;
    //       }

    //       // setTimeout(() => {
    //       //   this.sucessoMensagem = false;
    //       //   this.localPagina.back();
    //       // }, 3000);
    //     },
    //     error: (e) => {
    //       // setTimeout(() => {
    //       //   this.erroMensagem = false;
    //       // }, 5000);
    //     },
    //     complete: () => console.log(this.model),
  }
}
