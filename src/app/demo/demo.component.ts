import { ChangeDetectorRef, Component, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  public numero = signal(0);
  public double = computed(() => this.numero() * 2);

  public numero2 = 1;
  public changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      console.log('el numero ha cambiado', this.numero());
    });
  }
  incrementar() {
    this.numero.update(n => n + 1);
    this.changeDetectorRef.detectChanges();
  }

  incrementarNumero2() {
    this.numero2++;
  }
}
