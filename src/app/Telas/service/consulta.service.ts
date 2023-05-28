import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  private readonly API = 'api/consulta';

  constructor(private httpCliente: HttpClient) {}

  save(consulta: Consulta, id: number, email: string) {
    return this.httpCliente.post<Consulta>(
      `${this.API}/${id}/${email}`,
      consulta
    );
  }
}
