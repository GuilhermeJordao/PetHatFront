import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdministradorService } from 'src/app/Telas-Adm/service/administrador.service';
import { Router } from '@angular/router';
import { Administrador } from '../model/administrador';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.scss'],
})
export class LoginADMComponent {
  sucessoMensagem = false;
  erroMensagem = false;
  form: FormGroup;
  dados: any;
  adm: Administrador | undefined;

  constructor(
    private admService: AdministradorService,
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
      this.admService.login(this.form.value).subscribe({
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
      this.router.navigate([`/TabelaCrud`]);
    }, 2000);
  }

  private errado() {
    this.erroMensagem = true;
    setTimeout(() => {
      this.erroMensagem = false;
    }, 5000);
  }
}
