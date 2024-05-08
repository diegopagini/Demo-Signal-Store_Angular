import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { userFeature } from './ejemplo-sin-signals/store';
import { UserEffects } from './ejemplo-sin-signals/store/user.effects';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ejemplo-con-signals',
    pathMatch: 'full'
  },
  {
    path: 'ejemplo-con-signals',
    loadComponent: () =>
      import('./ejemplo-con-signals/ejemplo-con-signals.component').then(m => m.EjemploConSignalsComponent)
  },
  {
    path: 'ejemplo-sin-signals',
    loadComponent: () =>
      import('./ejemplo-sin-signals/ejemplo-sin-signals.component').then(m => m.EjemploSinSignalsComponent),
    providers: [provideState(userFeature), provideEffects(UserEffects)]
  },
  {
    path: 'advanced',
    loadComponent: () => import('./signals-advanced/signals-advanced.component').then(m => m.SignalsAdvancedComponent)
  },
  {
    path: 'input-signals',
    loadComponent: () => import('./input-signals/input-signals.component').then(m => m.InputSignalsComponent)
  },
  {
    path: 'signal-queries',
    loadComponent: () => import('./signal-queries/signal-queries.component').then(m => m.SignalQueriesComponent)
  },
  {
    path: 'detection-demo',
    loadComponent: () => import('./detection-demo/detection-demo.component').then(m => m.DetectionDemoComponent)
  }
];
