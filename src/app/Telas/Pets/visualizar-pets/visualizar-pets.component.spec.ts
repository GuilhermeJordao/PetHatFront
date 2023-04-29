import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPetsComponent } from './visualizar-pets.component';

describe('VisualizarPetsComponent', () => {
  let component: VisualizarPetsComponent;
  let fixture: ComponentFixture<VisualizarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
