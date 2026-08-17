import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductBtn } from './view-product-btn';

describe('ViewProductBtn', () => {
  let component: ViewProductBtn;
  let fixture: ComponentFixture<ViewProductBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
