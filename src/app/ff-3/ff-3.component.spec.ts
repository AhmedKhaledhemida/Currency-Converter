import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FF3Component } from './ff-3.component';

describe('FF3Component', () => {
  let component: FF3Component;
  let fixture: ComponentFixture<FF3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FF3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FF3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
