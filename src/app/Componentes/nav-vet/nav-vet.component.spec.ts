import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVetComponent } from './nav-vet.component';

describe('NavVetComponent', () => {
  let component: NavVetComponent;
  let fixture: ComponentFixture<NavVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
