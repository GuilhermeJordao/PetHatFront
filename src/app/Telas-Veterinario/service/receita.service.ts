import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private readonly API = 'api/receita';
  termo: string = '';

  constructor(private httpCliente: HttpClient) {}

  save(receita: Receita) {
    return this.httpCliente.post<Receita>(`${this.API}/create`, receita);
  }

  buscar(id: any) {
    return this.httpCliente.get<Receita>(`${this.API}/buscar/${id}`);
  }
}
