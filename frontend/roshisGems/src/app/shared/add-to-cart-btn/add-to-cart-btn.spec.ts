import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartBtn } from './add-to-cart-btn';

describe('AddToCartBtn', () => {
  let component: AddToCartBtn;
  let fixture: ComponentFixture<AddToCartBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(AddToCartBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
