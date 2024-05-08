import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploSinSignalsComponent } from './ejemplo-sin-signals.component';

describe('EjemploSinSignalsComponent', () => {
  let component: EjemploSinSignalsComponent;
  let fixture: ComponentFixture<EjemploSinSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploSinSignalsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploSinSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
