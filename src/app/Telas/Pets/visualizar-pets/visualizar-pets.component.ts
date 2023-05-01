import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../model/pet';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-visualizar-pets',
  templateUrl: './visualizar-pets.component.html',
  styleUrls: ['./visualizar-pets.component.css'],
})
export class VisualizarPetsComponent {
  pets: Pet[] | undefined;
  email: any = localStorage.getItem('email');

  constructor(private petService: PetService, private router: Router) {
    this.petService.listar(this.email).subscribe((data) => {
      this.pets = data;
    });
  }

  detalhesPet(pet: Pet) {
    this.router.navigate([`/PerfilPet/${pet._id}`]);
  }
}
