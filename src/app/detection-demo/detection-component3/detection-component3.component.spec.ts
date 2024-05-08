import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionComponent3Component } from './detection-component3.component';

describe('DetectionComponent3Component', () => {
  let component: DetectionComponent3Component;
  let fixture: ComponentFixture<DetectionComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionComponent3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectionComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
