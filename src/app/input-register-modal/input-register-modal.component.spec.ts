import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRegisterModalComponent } from './input-register-modal.component';

describe('InputRegisterModalComponent', () => {
  let component: InputRegisterModalComponent;
  let fixture: ComponentFixture<InputRegisterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRegisterModalComponent]
    });
    fixture = TestBed.createComponent(InputRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
