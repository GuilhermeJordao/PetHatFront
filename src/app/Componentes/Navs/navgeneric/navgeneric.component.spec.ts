import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgenericComponent } from './navgeneric.component';

describe('NavgenericComponent', () => {
  let component: NavgenericComponent;
  let fixture: ComponentFixture<NavgenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavgenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavgenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
