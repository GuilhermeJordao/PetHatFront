import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsuComponent } from './crud-usu.component';

describe('CrudUsuComponent', () => {
  let component: CrudUsuComponent;
  let fixture: ComponentFixture<CrudUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
