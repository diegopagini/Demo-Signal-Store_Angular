import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionComponent2Component } from './detection-component2.component';

describe('DetectionComponent2Component', () => {
  let component: DetectionComponent2Component;
  let fixture: ComponentFixture<DetectionComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionComponent2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectionComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
