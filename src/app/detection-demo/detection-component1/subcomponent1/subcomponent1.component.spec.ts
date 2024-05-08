import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent1Component } from './subcomponent1.component';

describe('Subcomponent1Component', () => {
  let component: Subcomponent1Component;
  let fixture: ComponentFixture<Subcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcomponent1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Subcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
