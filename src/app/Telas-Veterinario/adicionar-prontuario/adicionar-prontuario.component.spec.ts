import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProntuarioComponent } from './adicionar-prontuario.component';

describe('AdicionarProntuarioComponent', () => {
  let component: AdicionarProntuarioComponent;
  let fixture: ComponentFixture<AdicionarProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarProntuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
