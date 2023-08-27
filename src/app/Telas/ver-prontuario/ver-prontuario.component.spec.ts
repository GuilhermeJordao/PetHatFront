import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProntuarioComponent } from './ver-prontuario.component';

describe('VerProntuarioComponent', () => {
  let component: VerProntuarioComponent;
  let fixture: ComponentFixture<VerProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerProntuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
