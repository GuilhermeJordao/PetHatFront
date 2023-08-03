import { Component, OnInit,Type } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadImagemService } from '../service/upload-imagem.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-perfil-usu',
  templateUrl: './perfil-usu.component.html',
  styleUrls: ['./perfil-usu.component.scss'],
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
  closeResult: any;
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
    private imagemService: UploadImagemService,
    private modalService: NgbModal
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
      let foto = localStorage.getItem(this.id);
      this.imagemService.visualizar(foto).subscribe((blob) => {
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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
    this.imagemService.upload(this.selectedFile).subscribe((data) => {
      console.log(data);
      let id_foto = (data as any).id;
      localStorage.setItem(this.id, id_foto);

      this.imagemService.visualizar(id_foto).subscribe((blob) => {
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

function openModal() {
  throw new Error('Function not implemented.');
}


