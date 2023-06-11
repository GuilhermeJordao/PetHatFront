import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
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

  listarConsulta(email: string) {
    return this.httpCliente
      .get<Consulta[]>(this.API + `/agendada?email=${email}`)
      .pipe(first());
  }

  buscarPorId(id: number) {
    return this.httpCliente.get<Consulta>(`${this.API}/${id}`);
  }

  cancelar(id: number) {
    return this.httpCliente.delete(`${this.API}/${id}`);
  }

  concluir(id: number) {
    return this.httpCliente.put(`${this.API}/${id}`, undefined);
  }
}
