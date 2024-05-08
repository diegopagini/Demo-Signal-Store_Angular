import { Component, computed, effect, ElementRef, viewChild, viewChildren } from '@angular/core';
import { QueryComponentComponent } from './query-component/query-component.component';

@Component({
  selector: 'app-signal-queries',
  standalone: true,
  imports: [QueryComponentComponent],
  templateUrl: './signal-queries.component.html',
  styleUrl: './signal-queries.component.scss'
})
export class SignalQueriesComponent {
  public div = viewChild<ElementRef<HTMLDivElement>>('divElement');

  public sizeDiv = computed(() => this.div()?.nativeElement.offsetWidth);

  public queryComponents = viewChildren(QueryComponentComponent, { read: ElementRef });

  constructor() {
    effect(() => {
      console.log('Div element in effect', this.div()?.nativeElement.offsetWidth);
    });

    effect(() => {
      console.log('Query components retrieved', this.queryComponents());
    });
  }
}
