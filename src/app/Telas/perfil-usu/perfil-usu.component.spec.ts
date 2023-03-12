import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuComponent } from './perfil-usu.component';

describe('PerfilUsuComponent', () => {
  let component: PerfilUsuComponent;
  let fixture: ComponentFixture<PerfilUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
