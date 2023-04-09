import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableVeterinarioComponent } from './crud-table-veterinario.component';

describe('CrudTableVeterinarioComponent', () => {
  let component: CrudTableVeterinarioComponent;
  let fixture: ComponentFixture<CrudTableVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTableVeterinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTableVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
