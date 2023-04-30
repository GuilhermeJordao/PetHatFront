import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private readonly API = 'api/pet';

  constructor(private httpCliente: HttpClient) {}

  save(pet: Pet) {
    return this.httpCliente.post<Pet>(
      `${this.API}/cadastro/${localStorage.getItem('email')}`,
      pet
    );
  }
}
