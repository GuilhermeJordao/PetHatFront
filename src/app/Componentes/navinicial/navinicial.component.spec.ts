import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinicialComponent } from './navinicial.component';

describe('NavinicialComponent', () => {
  let component: NavinicialComponent;
  let fixture: ComponentFixture<NavinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavinicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
