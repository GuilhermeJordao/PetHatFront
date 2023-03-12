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

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      email: [null],
      senha: [null],
    });
  }

  onSubmit() {
    this.clienteService.save(this.form.value).subscribe((dados) => {
      console.log(dados);
    });
  }

  ngOnInit() {}
}
