import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureCollection } from './signature-collection';

describe('SignatureCollection', () => {
  let component: SignatureCollection;
  let fixture: ComponentFixture<SignatureCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
