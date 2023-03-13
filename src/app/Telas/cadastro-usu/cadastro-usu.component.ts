import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';


//Importando Icones
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro-usu',
  templateUrl: './cadastro-usu.component.html',
  styleUrls: ['./cadastro-usu.component.css'],
})
export class CadastroUsuComponent implements OnInit {
  //Nomeando Icones
  Eye = faEye;
  Slash = faEyeSlash;

  //Formulário
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

  visivel:boolean = true;
  changetype1:boolean = true;
  changetype2:boolean = true;

  viewpass1(){
    this.visivel = !this.visivel;
    this.changetype1 = !this.changetype1
  }

  viewpass2(){
    this.visivel = !this.visivel;
    this.changetype2 = !this.changetype2
  }

  ngOnInit() {}

}
