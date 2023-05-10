import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadImagemService } from '../service/upload-imagem.service';

@Component({
  selector: 'app-perfil-usu',
  templateUrl: './perfil-usu.component.html',
  styleUrls: ['./perfil-usu.component.css'],
})
export class PerfilUsuComponent implements OnInit {
  ButtonEnviar = false;
  ImagemPadrao = true;
  ImagemEditada = false;
  perfil = {
    nome: [null],
    cpf: [null],
    email: [null],
    senha: [null],
  };
  id: any = 0;
  cliente: Cliente | undefined;
  form: FormGroup;
  imagem: string | undefined;
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string | undefined;
  imageName: any;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private imagemService: UploadImagemService
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      email: [null],
      senha: [null],
    });
  }

  ngOnInit() {
    this.clienteService.buscarIdPorEmail().subscribe((dados) => {
      this.id = dados;
      console.log(dados);

      this.imagemService
        .visualizar(localStorage.getItem(this.id))
        .subscribe((blob) => {
          console.log(blob);
          this.createImageFromBlob(blob);
          this.ImagemPadrao = false;
          this.ImagemEditada = true;
          this.ButtonEnviar = false;
        });

      this.clienteService.visualizarPerfil(this.id).subscribe((data) => {
        this.perfil = {
          nome: (data as any).nome,
          cpf: (data as any).cpf,
          email: (data as any).email,
          senha: (data as any).senha,
        };
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.clienteService.visualizarPerfil(this.id).subscribe((data) => {
      if (this.form.value.nome === null) {
        this.form.value.nome = data.nome;
      }

      if (this.form.value.cpf === null) {
        this.form.value.cpf = data.cpf;
      }

      if (this.form.value.email === null) {
        this.form.value.email = data.email;
      }

      if (this.form.value.senha === null) {
        this.form.value.senha = data.senha;
      }
      console.log(this.form.value);

      this.clienteService
        .alterarPerfil(this.id, this.form.value)
        .subscribe((data) => {
          console.log(data);
          localStorage.setItem('email', data.email);
          console.log('Usuário atualizado com sucesso!');
          window.location.reload();
        });
    });
  }

  deletarConta() {
    console.log(this.id);
    this.router.navigate([`/`]);
    this.clienteService.deletarPerifl(this.id).subscribe();
    localStorage.clear();
  }

  sairConta() {
    this.router.navigate(['/']);
    localStorage.removeItem('email');
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.ButtonEnviar = true;
  }

  submitImagem() {
    console.log(this.selectedFile);
    this.imagemService.upload(this.selectedFile, this.id).subscribe((data) => {
      window.localStorage.setItem(this.id, data);
      this.imagem = data;

      this.imagemService
        .visualizar(localStorage.getItem(this.id))
        .subscribe((blob) => {
          console.log(blob);
          this.createImageFromBlob(blob);
          this.ImagemPadrao = false;
          this.ImagemEditada = true;
          this.ButtonEnviar = false;
        });
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageName = reader.result;
        console.log(this.imageName);
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
