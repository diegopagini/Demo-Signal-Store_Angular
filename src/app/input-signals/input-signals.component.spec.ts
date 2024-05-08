import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignalsComponent } from './input-signals.component';

describe('InputSignalsComponent', () => {
  let component: InputSignalsComponent;
  let fixture: ComponentFixture<InputSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSignalsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
