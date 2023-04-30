import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVeterinarioComponent } from './cadastro-veterinario.component';

describe('CadastroVeterinarioComponent', () => {
  let component: CadastroVeterinarioComponent;
  let fixture: ComponentFixture<CadastroVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVeterinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
