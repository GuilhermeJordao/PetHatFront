import { HttpClient } from '@angular/common/http';
import { Injectable, NgIterable } from '@angular/core';
import { first, Observable } from 'rxjs';
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

  listar() {
    return this.httpCliente.get<Pet[]>(`${this.API}`).pipe(first());
  }

  buscarPorId(id: number) {
    return this.httpCliente.get<Pet>(`${this.API}/buscar/${id}`);
  }

  alterarPet(id: number, pet: Pet) {
    return this.httpCliente.put<Pet>(`${this.API}/alterar/${id}`, pet);
  }

  deletarPet(id: number): Observable<unknown> {
    return this.httpCliente.delete(`${this.API}/excluir/${id}`);
  }
}
