import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { VeterinarioService } from 'src/app/Telas-Veterinario/service/veterinario.service';
import { Consulta } from '../model/consulta';
import { Pet } from '../model/pet';
import { ConsultaService } from '../service/consulta.service';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.scss'],
})
export class AgendarConsultaComponent {
  perfilImg: string = '';
  petId: string = '';
  Especialidade = false;
  ImagemPadrao = true;
  ImagemEditada = false;
  selecionarVet: string = 'Selecionar';
  selecionadoVet: string = 'Selecionado';
  imageName: any;
  vets: Veterinario[] | undefined;
  pets: Pet[] | undefined;
  id: number[] = [];
  email: any = localStorage.getItem('email');
  especialidade: string = '';
  emailVet: string = '';
  horario: string = '';
  data: string = '';
  manha: boolean = false;
  tarde: boolean = false;
  noite: boolean = false;
  erroMensagem = false;
  sucessoMensagem = false;

  constructor(
    private petService: PetService,
    private vetService: VeterinarioService,
    private consultaService: ConsultaService
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
  updatePetImage() {
    const petImage = localStorage.getItem('Pet' + this.petId);
    if (petImage) {
      this.perfilImg = `/api/imagem/exibir/${petImage}`;
      this.ImagemEditada = true;
      this.ImagemPadrao = false;
    } else {
      this.perfilImg = '';
      this.ImagemEditada = false;
      this.ImagemPadrao = true;
    }
  }
  EspecialidadeSelecionada() {
    this.Especialidade = true;
  }

  pegarVet(email: string) {
    this.emailVet = email;
    this.vetService.buscarId(this.emailVet).subscribe((data) => {
      let number: any = data;
      this.vetService.visualizarPerfil(number).subscribe((dado) => {
        if (dado.turno === 'MANHA') {
          this.manha = true;
          this.tarde = false;
          this.noite = false;
        } else if (dado.turno === 'TARDE') {
          this.tarde = true;
          this.noite = false;
          this.manha = false;
        } else if (dado.turno === 'NOITE') {
          this.noite = true;
          this.manha = false;
          this.tarde = false;
        }
      });
    });
  }

  agendar() {
    console.log(this.data);

    const obj: any = {
      dataConsulta: this.data,
      hora: this.horario,
    };
    this.consultaService
      .save(obj, Number.parseInt(this.petId), this.emailVet)
      .subscribe({
        next: (dados) => {
          this.correto();
        },
        error: (e) => {
          this.errado();
        },
      });
  }

  private correto() {
    this.sucessoMensagem = true;
    setTimeout(() => {
      this.sucessoMensagem = false;
    }, 2000);
  }

  private errado() {
    this.erroMensagem = true;
    setTimeout(() => {
      this.erroMensagem = false;
    }, 2000);
  }
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
