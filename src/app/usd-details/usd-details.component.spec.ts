import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USDDETAILSComponent } from './usd-details.component';

describe('USDDETAILSComponent', () => {
  let component: USDDETAILSComponent;
  let fixture: ComponentFixture<USDDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [USDDETAILSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USDDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
