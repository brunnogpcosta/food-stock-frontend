import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodModalComponent } from './add-food-modal.component';

describe('AddFoodModalComponent', () => {
  let component: AddFoodModalComponent;
  let fixture: ComponentFixture<AddFoodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodModalComponent]
    });
    fixture = TestBed.createComponent(AddFoodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
