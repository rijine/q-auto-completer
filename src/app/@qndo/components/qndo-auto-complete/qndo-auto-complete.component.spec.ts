import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QndoAutoCompleteComponent } from './qndo-auto-complete.component';

describe('QndoAutoCompleteComponent', () => {
  let component: QndoAutoCompleteComponent;
  let fixture: ComponentFixture<QndoAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QndoAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QndoAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
