import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialUsuComponent } from './inicial-usu.component';

describe('InicialUsuComponent', () => {
  let component: InicialUsuComponent;
  let fixture: ComponentFixture<InicialUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
