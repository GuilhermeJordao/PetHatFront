import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-usu',
  templateUrl: './perfil-usu.component.html',
  styleUrls: ['./perfil-usu.component.css']
})

export class PerfilUsuComponent implements OnInit{
  Value: any;
  id: any;
  nome: any;
  email: any;
  cpf: any;
  senha: any;
  form: FormGroup | any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginComponent:LoginComponent,
    private localPagina: Location
    ) {
      //this.form = this.formBuilder.group({
        //nome: this.nome.value,
        //email: this.email.value,
        //senha: this.senha.value,
      //});
    }

  ButtonAlterar(){
    this.Value = 'amanda@email.com';
    this.http.get(`api/cliente/perfil/cpf/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.cpf = data;
      this.http.put(`api/cliente/perfil/alterar/${this.cpf}`,this.form).subscribe(
        () => {
          console.log('Usuário atualizado com sucesso!');
          this.localPagina.back();
        }
        );
      })
  }

  ButtonDelete(){
    this.Value = '123';
    this.http.get(`api/cliente/perfil/id/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.id = data;
      this.http.delete(`api/cliente/perfil/excluir/${this.id}`)
      .subscribe();
      setTimeout(() => {
        this.router.navigate([`/`]);
      }, 1000);
    })
  }
  ngOnInit() {
    this.Value = 'amanda@email.com';
    this.http.get(`api/cliente/perfil/nome/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.nome = data;
    })

    this.http.get(`api/cliente/perfil/email/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.email = data;
    })

    this.http.get(`api/cliente/perfil/cpf/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.cpf = data;
    })

    this.http.get(`api/cliente/perfil/senha/${this.Value}`,{responseType: 'text'}).subscribe((data:any) => {
      this.senha = data;
    })
  }
  
}
