import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API = 'api/cliente';

  constructor(private httpCliente: HttpClient) {}

  save(cliente: Cliente) {
    return this.httpCliente.post<Cliente>(this.API, cliente);
  }
}
