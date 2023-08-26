import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFuncionalidadesComponent } from './teste-funcionalidades.component';

describe('TesteFuncionalidadesComponent', () => {
  let component: TesteFuncionalidadesComponent;
  let fixture: ComponentFixture<TesteFuncionalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteFuncionalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
