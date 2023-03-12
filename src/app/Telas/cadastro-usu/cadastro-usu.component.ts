import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    private formBuilder: FormBuilder,
    private toastr:ToastrService
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
    },(error)=> this.Error());
  }

  private Error() {
    this.toastr.error('Ops','Parece que algo deu errado :(');
  }

  ngOnInit() {}
}
