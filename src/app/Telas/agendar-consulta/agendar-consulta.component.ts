import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { VeterinarioService } from 'src/app/Telas-Veterinario/service/veterinario.service';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { UploadImagemService } from '../service/upload-imagem.service';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css'],
})
export class AgendarConsultaComponent {
  ImagemPadrao = true;
  ImagemEditada = false;
  imageName: any;
  vets: Veterinario[] | undefined;
  pets: Pet[] | undefined;
  id: number[] = [];
  email: any = localStorage.getItem('email');
  especialidade: string = '';

  constructor(
    private petService: PetService, // private imagemService: UploadImagemService
    private vetService: VeterinarioService
  ) {
    this.petService.listar(this.email).subscribe((data) => {
      this.pets = data;
      this.pets.map((value) => this.id.push(value._id));
    });
  }

  buscarVeterinario() {
    console.log(this.especialidade);
    this.vetService
      .buscaPorEspecialidade(this.especialidade)
      .subscribe((data) => {
        this.vets = data;
      });
  }
  // petSelectionChange(event: any) {
  //   const selectedValue = event.target.value;
  //   console.log(selectedValue);

  //   this.visualizarPet(selectedValue);
  // }

  // visualizarPet(id: number) {
  //   let foto = localStorage.getItem(`Pet${id}`);
  //   this.imagemService.visualizar(foto).subscribe((blob) => {
  //     console.log(blob);
  //     this.createImageFromBlob(blob);
  //     this.ImagemPadrao = false;
  //     this.ImagemEditada = true;
  //   });
  // }

  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener(
  //     'load',
  //     () => {
  //       if (reader.result) {
  //         this.imageName = reader.result;
  //         this.ImagemEditada = true;
  //       } else {
  //         this.ImagemPadrao = true;
  //       }
  //     },
  //     false
  //   );

  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }
}
