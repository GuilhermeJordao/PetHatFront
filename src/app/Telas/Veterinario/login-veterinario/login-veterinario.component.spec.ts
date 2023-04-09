import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVeterinarioComponent } from './login-veterinario.component';

describe('LoginVeterinarioComponent', () => {
  let component: LoginVeterinarioComponent;
  let fixture: ComponentFixture<LoginVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVeterinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
