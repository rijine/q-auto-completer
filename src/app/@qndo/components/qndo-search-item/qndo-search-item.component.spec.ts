import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QndoSearchItemComponent } from './qndo-search-item.component';

describe('QndoSearchItemComponent', () => {
  let component: QndoSearchItemComponent;
  let fixture: ComponentFixture<QndoSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QndoSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QndoSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
