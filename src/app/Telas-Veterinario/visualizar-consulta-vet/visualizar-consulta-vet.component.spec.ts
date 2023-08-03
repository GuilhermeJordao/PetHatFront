import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarConsultaVetComponent } from './visualizar-consulta-vet.component';

describe('VisualizarConsultaVetComponent', () => {
  let component: VisualizarConsultaVetComponent;
  let fixture: ComponentFixture<VisualizarConsultaVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarConsultaVetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarConsultaVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
