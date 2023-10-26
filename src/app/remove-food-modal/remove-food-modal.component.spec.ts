import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFoodModalComponent } from './remove-food-modal.component';

describe('RemoveFoodModalComponent', () => {
  let component: RemoveFoodModalComponent;
  let fixture: ComponentFixture<RemoveFoodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveFoodModalComponent]
    });
    fixture = TestBed.createComponent(RemoveFoodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
