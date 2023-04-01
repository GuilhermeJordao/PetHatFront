import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { StorageService } from './storage.service';
import { catchError, Observable, throwError } from 'rxjs';
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
    return this.httpCliente
      .get(`${this.API}/login/${cliente.email}/${cliente.senha}`)
      .pipe(
        catchError((error) => this.handleError(error)) // then handle the error
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
