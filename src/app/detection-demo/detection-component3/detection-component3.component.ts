import { Component } from '@angular/core';

@Component({
  selector: 'app-detection-component3',
  standalone: true,
  imports: [],
  templateUrl: './detection-component3.component.html',
  styleUrl: './detection-component3.component.scss'
})
export class DetectionComponent3Component {
  public getCounter(): number {
    console.log('Get counter 3 - Check');
    return 1;
  }
}
