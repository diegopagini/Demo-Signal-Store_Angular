import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComponentComponent } from './query-component.component';

describe('QueryComponentComponent', () => {
  let component: QueryComponentComponent;
  let fixture: ComponentFixture<QueryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryComponentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(QueryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
