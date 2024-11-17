import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FF1Component } from './ff-1.component';

describe('FF1Component', () => {
  let component: FF1Component;
  let fixture: ComponentFixture<FF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FF1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
