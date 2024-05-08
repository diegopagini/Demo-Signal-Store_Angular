import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetectionComponent1Component } from './detection-component1/detection-component1.component';
import { DetectionComponent2Component } from './detection-component2/detection-component2.component';
import { DetectionComponent3Component } from './detection-component3/detection-component3.component';

@Component({
  selector: 'app-detection-demo',
  standalone: true,
  imports: [DetectionComponent1Component, DetectionComponent3Component, DetectionComponent2Component],
  templateUrl: './detection-demo.component.html',
  styleUrl: './detection-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionDemoComponent {
  public getCounter(): number {
    console.log('Componente demo - Check');
    return 1;
  }
}
