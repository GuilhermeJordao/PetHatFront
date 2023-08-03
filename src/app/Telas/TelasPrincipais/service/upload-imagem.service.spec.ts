import { TestBed } from '@angular/core/testing';

import { UploadImagemService } from './upload-imagem.service';

describe('UploadImagemService', () => {
  let service: UploadImagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadImagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
