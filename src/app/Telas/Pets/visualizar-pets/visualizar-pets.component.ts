import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../TelasPrincipais/model/pet';
import { PetService } from '../../TelasPrincipais/service/pet.service';
import { UploadImagemService } from '../../TelasPrincipais/service/upload-imagem.service';

@Component({
  selector: 'app-visualizar-pets',
  templateUrl: './visualizar-pets.component.html',
  styleUrls: ['./visualizar-pets.component.scss'],
})
export class VisualizarPetsComponent {
  ImagemPadrao = true;
  ImagemEditada = false;
  pets: Pet[] | undefined;
  email: any = localStorage.getItem('email');
  imageName: any;
  id: any = 0;

  constructor(
    private petService: PetService,
    private router: Router,
    private imagemService: UploadImagemService
  ) {
    this.petService.listar(this.email).subscribe((data) => {
      this.pets = data;
      this.id = this.pets.map((value) => value._id);
      let aux = [];

      for (let index = 0; index < this.id.length; index++) {
        let foto = localStorage.getItem(`Pet${this.id[index]}`);
        if (foto !== null) {
          aux.push(Number.parseInt(foto));
        }
      }
      console.log(this.pets.forEach((value) => value.imageName));

      this.visualizarImagem(aux, this.pets);
    });
  }

  visualizarImagem(aux: any[], pets: Pet[]) {
    for (let i = 0; i < aux.length; i++) {
      console.log(aux[i]);

      this.imagemService.visualizar(aux[i]).subscribe((blob) => {
        console.log(blob);
        this.createImageFromBlob(blob, pets[i]); // Pass pets[i] instead of pets
        this.ImagemPadrao = false;
        this.ImagemEditada = true;
      });
    }
  }

  detalhesPet(pet: Pet) {
    this.router.navigate([`/PerfilPet/${pet._id}`]); // Use backticks for template literals
  }

  createImageFromBlob(image: Blob, pet: Pet) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        if (reader.result) {
          pet.imageName = reader.result;
          this.ImagemEditada = true;
        } else {
          this.ImagemPadrao = true;
        }
      },
      false
    );
  
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}