import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPetComponent } from './perfil-pet.component';

describe('PerfilPetComponent', () => {
  let component: PerfilPetComponent;
  let fixture: ComponentFixture<PerfilPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
