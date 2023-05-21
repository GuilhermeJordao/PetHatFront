import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { PetService } from '../../service/pet.service';
import { UploadImagemService } from '../../service/upload-imagem.service';

@Component({
  selector: 'app-perfil-pet',
  templateUrl: './perfil-pet.component.html',
  styleUrls: ['./perfil-pet.component.css'],
})
export class PerfilPetComponent implements OnInit {
  pet = {
    nome: [null],
    especie: [null],
    sexo: [null],
    raca: [null],
    idade: [null],
  };
  private id: any = 0;
  nome: string | undefined;
  form: FormGroup;
  erroMensagem = false;
  sucessoMensagem = false;
  selectedFile!: File;
  ButtonEnviar = false;
  ImagemPadrao = true;
  ImagemEditada = false;
  imageName: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petServico: PetService,
    private formBuilder: FormBuilder,
    private imagemService: UploadImagemService
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      especie: [null],
      sexo: [null],
      raca: [null],
      idade: [null],
    });
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.petServico.buscarPorId(this.id).subscribe((dados) => {
        console.log(dados.cliente.nome);
        this.nome = (dados as any).cliente.nome;
        this.pet = {
          nome: (dados as any).nome,
          especie: (dados as any).especie,
          sexo: (dados as any).sexo,
          raca: (dados as any).raca,
          idade: (dados as any).idade,
        };
      });
    });
  }

  onSubmit() {
    this.petServico.buscarPorId(this.id).subscribe((data) => {
      if (this.form.value.nome === null) {
        this.form.value.nome = data.nome;
      }

      if (this.form.value.especie === null) {
        this.form.value.especie = data.especie;
      }

      if (this.form.value.idade === null) {
        this.form.value.idade = data.idade;
      }

      if (this.form.value.raca === null) {
        this.form.value.raca = data.raca;
      }

      if (this.form.value.sexo === null) {
        this.form.value.sexo = data.sexo;
      }

      this.petServico.alterarPet(this.id, this.form.value).subscribe((data) => {
        console.log('Pet atualizado com sucesso!');
        window.location.reload();
      });
    });
  }

  deletarPet() {
    console.log(this.id);
    this.petServico.deletarPet(this.id).subscribe();
    this.router.navigate(['/VisualisarPets']);
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
      localStorage.setItem(`Pet${this.id}`, id_foto);

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
