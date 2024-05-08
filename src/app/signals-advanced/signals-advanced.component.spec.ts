import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAdvancedComponent } from './signals-advanced.component';

describe('SignalsAdvancedComponent', () => {
  let component: SignalsAdvancedComponent;
  let fixture: ComponentFixture<SignalsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAdvancedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
