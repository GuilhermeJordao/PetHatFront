import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialVetComponent } from './inicial-vet.component';

describe('InicialVetComponent', () => {
  let component: InicialVetComponent;
  let fixture: ComponentFixture<InicialVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialVetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
