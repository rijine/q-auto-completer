import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QndoAutoCompleteComponent } from './qndo-auto-complete.component';
import { FormsModule } from '@angular/forms';

describe('QndoAutoCompleteComponent', () => {
  let component: QndoAutoCompleteComponent;
  let fixture: ComponentFixture<QndoAutoCompleteComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [QndoAutoCompleteComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QndoAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should pass valid value to parent component', () => {
    it('should emit to parent component on selecting item', () => {
      const newData = { value: 'Mickel Jackson' };
      let selectedItem;
      //fixture.detectChanges();
      component.valueSelected.subscribe(item => {
        selectedItem = item;
      });

      component.selectItem(newData);
      expect(selectedItem).toBe(newData);
    });

    it('should not emit to parent component on selecting invalid item', () => {
      let selectedItem;
      component.valueSelected.subscribe(item => {
        selectedItem = item;
      });
      component.selectItem(null);
      expect(selectedItem).toBe(undefined);
    });
  });

  it('should show dropdown on focusing text box', () => {
    component.onFocus();
    expect(component.isDropdownVisible).toBeTruthy();
  });

  it('should hide dropdown on out of focus text box', () => {
    component.outFocus();
    expect(component.isDropdownVisible).toBeFalsy();
  });

  describe('should return a property on passing object/item', () => {
    it('should return/show valid property on passing object', () => {
      const newObj = {value: 10};
      const prop = component.getProperty(newObj);
      expect(prop).toBe(newObj[component.propertyToShow]);
    });

    it('should return a undefined when property to show doesnot exist in passing object', () => {
      const newObj = {id: 10};
      const prop = component.getProperty(newObj);
      expect(prop).toBe(newObj[component.propertyToShow]);
    });

    it('should return/show valid item if its not object', () => {
      const newItem = 'Sherlock Homes';
      const prop = component.getProperty(newItem);
      expect(prop).toBe(newItem);
    });
  });

  describe('should set a selected item using keyboard controls', () => {
    beforeEach(() => {
      component.filteredSource = ['Apple','Ball','Cat'];
      component.selectedIndex = -1;
    });

    it('should select next item on pressing DOWN arrow', () => {
      const event = {keyCode: 40};
      component.keyBoardEventHandler(event);
      expect(component.selectedIndex).toBe(0);

      component.keyBoardEventHandler(event);
      component.keyBoardEventHandler(event);
      component.keyBoardEventHandler(event);
      expect(component.selectedIndex).toBe(0);
    });

    it('should select next item on pressing UP arrow', () => {
      const event = {keyCode: 38};
      component.keyBoardEventHandler(event);
      expect(component.selectedIndex).toBe(2);

      component.keyBoardEventHandler(event);
      component.keyBoardEventHandler(event);
      component.keyBoardEventHandler(event);
      expect(component.selectedIndex).toBe(2);
    });

    it('should select next item on pressing Enter/Tab arrow', () => {
      const eventDown = {keyCode: 40};
      component.keyBoardEventHandler(eventDown);

      let selectedItem;
      component.valueSelected.subscribe(item => {
        selectedItem = item;
      });
      const eventEnter = {keyCode: 13};
      component.keyBoardEventHandler(eventEnter);

      expect(selectedItem).toBe(component.filteredSource[0]);
    });

  });



});
