import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-detection-component2',
  standalone: true,
  imports: [],
  templateUrl: './detection-component2.component.html',
  styleUrl: './detection-component2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionComponent2Component {
  public getCounter(): number {
    console.log('Get counter 2 - Check');
    return 1;
  }
}
