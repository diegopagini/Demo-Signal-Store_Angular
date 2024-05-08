import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionDemoComponent } from './detection-demo.component';

describe('DetectionDemoComponent', () => {
  let component: DetectionDemoComponent;
  let fixture: ComponentFixture<DetectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionDemoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
