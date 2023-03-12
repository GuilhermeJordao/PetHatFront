import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-cadastro-usu',
  templateUrl: './cadastro-usu.component.html',
  styleUrls: ['./cadastro-usu.component.css'],
})
export class CadastroUsuComponent implements OnInit {
  form: FormGroup;
  erroMensagem = false;
  sucessoMensagem = false;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private localPagina: Location
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      email: [null],
      senha: [null],
    });
  }

  onSubmit() {
    this.clienteService.save(this.form.value).subscribe({
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

  ngOnInit() {}
}
