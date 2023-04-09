import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginADMComponent } from './login-adm.component';

describe('LoginADMComponent', () => {
  let component: LoginADMComponent;
  let fixture: ComponentFixture<LoginADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginADMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
