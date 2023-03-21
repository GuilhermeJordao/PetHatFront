import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API = 'api/cliente';
  termo: string = '';

  constructor(
    private httpCliente: HttpClient,
    private storageService: StorageService
  ) {}

  save(cliente: Cliente) {
    return this.httpCliente.post<Cliente>(this.API, cliente);
  }

  login(cliente: Cliente) {
    return this.httpCliente.get(
      `${this.API}/login/${cliente.email}/${cliente.senha}`
    );
  }

  buscarIdPorEmail() {
    return this.httpCliente.get<Cliente>(
      `${this.API}/perfil/id/${localStorage.getItem('email')}`
    );
  }

  buscarIdPorLogin(email: string) {
    return this.httpCliente.get<Cliente>(
      `${this.API}/perfil/id/${localStorage.getItem('email')}`
    );
  }

  visualizarPerfil(_id: number) {
    return this.httpCliente.get<Cliente>(`${this.API}/${_id}`);
  }

  alterarPerfil(id: number, cliente: Cliente) {
    return this.httpCliente.put<Cliente>(
      `${this.API}/perfil/alterar/${id}`,
      cliente
    );
  }

  /** DELETE: delete the hero from the server */
  deletarPerifl(id: number): Observable<unknown> {
    return this.httpCliente.delete(`${this.API}/perfil/excluir/${id}`);
  }
}
