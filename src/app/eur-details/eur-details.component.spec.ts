import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EURDetailsComponent } from './eur-details.component';

describe('EURDetailsComponent', () => {
  let component: EURDetailsComponent;
  let fixture: ComponentFixture<EURDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EURDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EURDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
