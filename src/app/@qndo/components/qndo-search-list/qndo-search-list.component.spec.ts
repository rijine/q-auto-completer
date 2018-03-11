import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QndoSearchListComponent } from './qndo-search-list.component';

describe('QndoSearchListComponent', () => {
  let component: QndoSearchListComponent;
  let fixture: ComponentFixture<QndoSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QndoSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QndoSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
