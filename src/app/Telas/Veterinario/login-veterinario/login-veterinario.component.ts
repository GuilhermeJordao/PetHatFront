import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { StorageService } from '../../service/storage.service';
import { VeterinarioService } from '../service/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css'],
})
export class LoginVeterinarioComponent {
  sucessoMensagem = false;
  erroMensagem = false;
  form: FormGroup;
  dados: any;
  veterinario: Veterinario | undefined;
  storage: StorageService | undefined;

  constructor(
    private vet: VeterinarioService,
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
      this.vet.login(this.form.value).subscribe({
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
      this.router.navigate([`/PerfilVeterinario`]);
    }, 2000);
  }

  private errado() {
    this.erroMensagem = true;
    setTimeout(() => {
      this.erroMensagem = false;
    }, 5000);
  }
}
