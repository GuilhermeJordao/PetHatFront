import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, throwError } from 'rxjs';
import { StorageService } from 'src/app/Telas/service/storage.service';
import { Administrador } from '../model/administrador';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  private readonly API = 'api/adm';
  termo: string = '';

  constructor(
    private httpCliente: HttpClient,
    private storageService: StorageService
  ) {}

  login(adm: Administrador) {
    return this.httpCliente
      .get(`${this.API}/login/${adm.email}/${adm.senha}`)
      .pipe(
        catchError((error) => this.handleError(error)) // then handle the error
      );
  }

  save(veterinario: Veterinario) {
    return this.httpCliente.post<Veterinario>(this.API, veterinario);
  }

  listar() {
    return this.httpCliente.get<Veterinario[]>(`${this.API}`).pipe(first());
  }

  buscarPorId(id: number) {
    return this.httpCliente.get(`${this.API}/buscar/${id}`);
  }

  alterarPerfil(id: number, vet: Veterinario) {
    return this.httpCliente.put<Veterinario>(
      `${this.API}/perfil/alterar/${id}`,
      vet
    );
  }

  deletarPerfil(id: number) {
    console.log('delete');
    return this.httpCliente.delete(`${this.API}/excluir/${id}`);
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
