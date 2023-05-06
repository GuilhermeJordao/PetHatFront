import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImagemService {
  private readonly API = 'api/imagem';

  constructor(private httpCliente: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpCliente.post(`${this.API}/upload`, formData, {
      responseType: 'text',
    });
  }

  visualizar(fileName: string) {
    return this.httpCliente.get(`${this.API}/exibir/${fileName}`, {
      responseType: 'blob',
    });
  }
}
