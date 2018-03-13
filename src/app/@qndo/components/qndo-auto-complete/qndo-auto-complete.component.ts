import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { throttleTime } from 'rxjs/operators/throttleTime';

@Component({
  selector: 'qndo-auto-complete',
  templateUrl: './qndo-auto-complete.component.html',
  styleUrls: ['./qndo-auto-complete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QndoAutoCompleteComponent implements OnInit {
  @Input() source: any;
  @Input() propertyToShow = 'value';
  @Input() styles = '';
  @Input() minimumChars: string = '1';
  @Input() listSize: string = '6';

  @Output() valueSelected = new EventEmitter<any>();

  isDropdownVisible = false;
  isLoading = false;
  filteredSource: any[] = [];
  searchText = '';
  selectedIndex = -1;

  constructor() {}

  ngOnInit() {
    console.log(this.styles);
    this.refreshData('');
  }

  onFocus() {
    this.isDropdownVisible = true;
  }

  outFocus() {
    this.isDropdownVisible = false;
  }

  /**
   * Handler for user item selection, and emit to parent component
   * @param item single item from list of items
   */
  selectItem(item: any) {
    console.log(item);
    if (item) {
      this.valueSelected.emit(item);
      this.searchText = this.getProperty(item);
    }
  }
  /**
   * this will returns property value based on what propertyToShow variable is set
   * @param item single item of array of items
   */
  getProperty(item: any) {
    if (typeof item === 'object') {
      return item[this.propertyToShow];
    } else {
      return item;
    }
  }

  /**
   * Listening to input event of text box
   * @param  Event as textbox input event
   */
  refreshData($event) {
    if ( !Array.isArray(this.source) &&
      (!this.searchText ||
      this.searchText.length < parseInt(this.minimumChars))
    ) {
      return;
    }
    this.filteredSource = [];
    if (Array.isArray(this.source)) {
      //Cases: array of string, array of objects
      this.filteredSource = this.source.filter(item => {
        //TODO! - JSON stringify exception handling
        return (
          JSON.stringify(item)
            .toLowerCase()
            .indexOf(this.searchText.toLowerCase()) !== -1
        );
      });
    } else {
      this.isLoading = true;
      this.source(this.searchText).subscribe(res => {
        this.filteredSource = res.searchResults;
        this.isLoading = false;
      });
    }

    this.filteredSource = this.filteredSource.slice(0, parseInt(this.listSize));
  }

  /**
   * Handle keyboard inputs based on key code
   * UP DOWN arrows, ENTER, TAB keyboard actions are capturing.
   * @param  Event input
   */
  keyBoardEventHandler($event) {
    let customListLimit = parseInt(this.listSize);
    if (!this.isDropdownVisible) {
      this.isDropdownVisible = true;
    }
    if(customListLimit > this.filteredSource.length){
      customListLimit = this.filteredSource.length;
    }

    switch ($event.keyCode) {
      case 38: {
        if (this.selectedIndex > 0) {
          this.selectedIndex--;
        } else {
          this.selectedIndex = customListLimit - 1;
        }
        break;
      }
      case 40: {
        if (this.selectedIndex < customListLimit - 1) {
          this.selectedIndex++;
        } else {
          this.selectedIndex = 0;
        }
        break;
      }
      case 13:
      case 9: {
        if (
          this.selectedIndex >= 0 &&
          this.selectedIndex < customListLimit
        ) {
          this.selectItem(this.filteredSource[this.selectedIndex]);
          this.isDropdownVisible = false;
        }
        break;
      }
      default: {
        this.selectedIndex = -1;
      }
    }
  }
}
