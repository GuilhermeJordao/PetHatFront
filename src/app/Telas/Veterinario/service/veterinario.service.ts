import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Veterinario } from 'src/app/Telas-Adm/model/veterinario';
import { StorageService } from '../../service/storage.service';

@Injectable({
  providedIn: 'root',
})
export class VeterinarioService {
  private readonly API = 'api/veterinario';
  termo: string = '';

  constructor(
    private httpCliente: HttpClient,
    private storageService: StorageService
  ) {}

  login(veterinario: Veterinario) {
    return this.httpCliente
      .get(`${this.API}/login/${veterinario.email}/${veterinario.senha}`)
      .pipe(
        catchError((error) => this.handleError(error)) // then handle the error
      );
  }

  visualizarPerfil(_id: number) {
    return this.httpCliente.get<Veterinario>(`${this.API}/${_id}`);
  }

  buscarIdPorEmail() {
    return this.httpCliente.get<Veterinario>(
      `${this.API}/perfil/id/${localStorage.getItem('email')}`
    );
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
