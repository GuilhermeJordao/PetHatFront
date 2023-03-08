import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCrudsComponent } from './navbar-cruds.component';

describe('NavbarCrudsComponent', () => {
  let component: NavbarCrudsComponent;
  let fixture: ComponentFixture<NavbarCrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCrudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
