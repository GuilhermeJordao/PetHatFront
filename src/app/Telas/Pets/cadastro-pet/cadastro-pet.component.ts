import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { PetService } from '../../TelasPrincipais/service/pet.service';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.scss'],
})
export class CadastroPetComponent {
  form: FormGroup;
  erroMensagem = false;
  sucessoMensagem = false;

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder,
    private localPagina: Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      especie: [null],
      sexo: [null],
      raca: [null],
      idade: [null],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.petService.save(this.form.value).subscribe({
      next: (dados) => {
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
