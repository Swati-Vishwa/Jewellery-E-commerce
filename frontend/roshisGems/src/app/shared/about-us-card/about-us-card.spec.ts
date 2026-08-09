import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCard } from './about-us-card';

describe('AboutUsCard', () => {
  let component: AboutUsCard;
  let fixture: ComponentFixture<AboutUsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
