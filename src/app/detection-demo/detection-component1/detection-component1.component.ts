import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';

@Component({
  selector: 'app-detection-component1',
  standalone: true,
  imports: [Subcomponent1Component],
  templateUrl: './detection-component1.component.html',
  styleUrl: './detection-component1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionComponent1Component {
  public getCounter(): number {
    console.log('Componente 1 - Check');
    return 1;
  }
}
