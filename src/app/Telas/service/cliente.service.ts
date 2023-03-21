import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { StorageService } from './storage.service';
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
      `${this.API}/login/${this.storageService.setData(
        'email',
        cliente.email
      )}/${this.storageService.setData('senha', cliente.senha)}`
    );
  }

  buscarIdPorEmail() {
    return this.httpCliente.get<Cliente>(
      `${this.API}/perfil/id/${localStorage
        .getItem('email')
        ?.slice(1, length - 1)
        .toString()}`
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
}
