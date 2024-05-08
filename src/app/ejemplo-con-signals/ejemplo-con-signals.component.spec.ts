import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploConSignalsComponent } from './ejemplo-con-signals.component';

describe('EjemploConSignalsComponent', () => {
  let component: EjemploConSignalsComponent;
  let fixture: ComponentFixture<EjemploConSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploConSignalsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploConSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
