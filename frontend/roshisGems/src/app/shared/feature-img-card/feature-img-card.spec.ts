import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImgCard } from './feature-img-card';

describe('FeatureImgCard', () => {
  let component: FeatureImgCard;
  let fixture: ComponentFixture<FeatureImgCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureImgCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureImgCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
