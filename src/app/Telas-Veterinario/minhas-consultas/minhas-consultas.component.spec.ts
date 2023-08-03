import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasConsultasComponent } from './minhas-consultas.component';

describe('MinhasConsultasComponent', () => {
  let component: MinhasConsultasComponent;
  let fixture: ComponentFixture<MinhasConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
