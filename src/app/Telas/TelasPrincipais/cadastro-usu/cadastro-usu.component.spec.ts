import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuComponent } from './cadastro-usu.component';

describe('CadastroUsuComponent', () => {
  let component: CadastroUsuComponent;
  let fixture: ComponentFixture<CadastroUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
