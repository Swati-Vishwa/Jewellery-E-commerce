import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroButton } from './hero-button';

describe('HeroButton', () => {
  let component: HeroButton;
  let fixture: ComponentFixture<HeroButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroButton],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
