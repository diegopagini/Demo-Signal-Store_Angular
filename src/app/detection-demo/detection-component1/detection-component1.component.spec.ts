import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionComponent1Component } from './detection-component1.component';

describe('DetectionComponent1Component', () => {
  let component: DetectionComponent1Component;
  let fixture: ComponentFixture<DetectionComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionComponent1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectionComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
