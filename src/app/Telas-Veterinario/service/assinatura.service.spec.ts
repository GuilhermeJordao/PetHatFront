import { TestBed } from '@angular/core/testing';

import { AssinaturaService } from './assinatura.service';

describe('AssinaturaService', () => {
  let service: AssinaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssinaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
