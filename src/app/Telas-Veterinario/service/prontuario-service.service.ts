import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prontuario } from '../model/prontuario';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProntuarioServiceService {
  private readonly API = 'api/prontuario';
  termo: string = '';

  constructor(private httpCliente: HttpClient) {}

  save(prontuario: Prontuario, idPet: number) {
    return this.httpCliente.post<Prontuario>(
      `${this.API}/idPet/${idPet}`,
      prontuario
    );
  }

  listar(id: any) {
    return this.httpCliente
      .get<Prontuario[]>(`${this.API}/prontuarios/${id}`)
      .pipe(first());
  }
}
