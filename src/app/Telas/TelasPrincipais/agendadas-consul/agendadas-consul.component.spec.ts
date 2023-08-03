import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendadasConsulComponent } from './agendadas-consul.component';

describe('AgendadasConsulComponent', () => {
  let component: AgendadasConsulComponent;
  let fixture: ComponentFixture<AgendadasConsulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendadasConsulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendadasConsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
