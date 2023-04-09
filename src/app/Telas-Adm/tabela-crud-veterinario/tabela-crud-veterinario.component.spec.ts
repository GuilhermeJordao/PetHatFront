import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCrudVeterinarioComponent } from './tabela-crud-veterinario.component';

describe('TabelaCrudVeterinarioComponent', () => {
  let component: TabelaCrudVeterinarioComponent;
  let fixture: ComponentFixture<TabelaCrudVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCrudVeterinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCrudVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
