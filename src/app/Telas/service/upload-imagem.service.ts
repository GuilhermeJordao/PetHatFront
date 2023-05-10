import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImagemService {
  private readonly API = 'api/imagem';

  constructor(private httpCliente: HttpClient) {}

  upload(file: File, _id: number) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpCliente.post(`${this.API}/upload/${_id}`, formData, {
      responseType: 'text',
    });
  }

  visualizar(fileName: any) {
    return this.httpCliente.get(`${this.API}/exibir/${fileName}`, {
      responseType: 'blob',
    });
  }
}
