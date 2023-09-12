import { TestBed } from '@angular/core/testing';

import { ProntuarioServiceService } from './prontuario-service.service';

describe('ProntuarioServiceService', () => {
  let service: ProntuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProntuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
