import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Assinatura {
  private readonly API = 'api/assinatura';

  constructor(private httpCliente: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpCliente.post(`${this.API}/upload`, formData);
  }

  visualizar(id: any) {
    return this.httpCliente.get(`${this.API}/exibir/${id}`, {
      responseType: 'blob',
    });
  }
}
