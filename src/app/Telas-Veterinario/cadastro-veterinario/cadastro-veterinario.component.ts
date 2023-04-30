import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdministradorService } from 'src/app/Telas-Adm/service/administrador.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-veterinario',
  templateUrl: './cadastro-veterinario.component.html',
  styleUrls: ['./cadastro-veterinario.component.css'],
})
export class CadastroVeterinarioComponent {
  form: FormGroup;
  erroMensagem = false;
  sucessoMensagem = false;

  constructor(
    private admService: AdministradorService,
    private formBuilder: FormBuilder,
    private localPagina: Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      email: [null],
      senha: [null],
      crmvce: [null],
      telefone: [null],
      dataPortariaHabilitacao: [null],
    });
  }

  onSubmit() {
    this.admService.save(this.form.value).subscribe({
      next: (dados) => {
        console.log(dados);

        this.sucessoMensagem = true;
        setTimeout(() => {
          this.sucessoMensagem = false;
          this.localPagina.back();
        }, 3000);
      },
      error: (e) => {
        this.erroMensagem = true;
        setTimeout(() => {
          this.erroMensagem = false;
        }, 5000);
      },
      complete: () => console.log('completo'),
    });
  }
}
