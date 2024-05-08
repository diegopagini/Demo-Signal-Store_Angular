import { Component, input } from '@angular/core';

@Component({
  selector: 'app-query-component',
  standalone: true,
  imports: [],
  templateUrl: './query-component.component.html',
  styleUrl: './query-component.component.scss'
})
export class QueryComponentComponent {
  public text = input.required<string>();
}
