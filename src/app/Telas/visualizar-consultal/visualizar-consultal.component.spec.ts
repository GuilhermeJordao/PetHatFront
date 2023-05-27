import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarConsultalComponent } from './visualizar-consultal.component';

describe('VisualizarConsultalComponent', () => {
  let component: VisualizarConsultalComponent;
  let fixture: ComponentFixture<VisualizarConsultalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarConsultalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarConsultalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
