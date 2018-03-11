import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { throttleTime } from 'rxjs/operators/throttleTime';

@Component({
  selector: 'qndo-auto-complete',
  templateUrl: './qndo-auto-complete.component.html',
  styleUrls: ['./qndo-auto-complete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QndoAutoCompleteComponent implements OnInit {
  @Input() source: any;
  @Input() propertyToShow;
  @Input() styles = '';
  @Input() minimumChars: string = '1';

  @Output() valueSelected = new EventEmitter<any>();

  isDropdownVisible = false;
  isLoading = false;
  filteredSource: any[] = [];
  searchText = '';

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

  selectItem(item: any) {
    console.log(item);
    if (item) {
      this.valueSelected.emit(item);
      this.searchText = this.getProperty(item);
    }
  }

  getProperty(item: any) {
    if (typeof item === 'object') {
      return item[this.propertyToShow];
    } else {
      return item;
    }
  }

  refreshData($event) {
    if (!this.searchText || this.searchText.length < parseInt(this.minimumChars)) {
      return;
    }
    this.filteredSource = [];
    //textInput, arrayInput, liveInput
    if (Array.isArray(this.source)) {
      //Cases: array of string, array of objects
      this.filteredSource = this.source.filter(item => {
        //TODO! - JSON stringify exception handling
        return (
          JSON.stringify(item)
            .toLowerCase()
            .indexOf(this.searchText) !== -1
        );
      });
    } else {
      this.isLoading = true;
      this.source(this.searchText).subscribe(res => {
        this.filteredSource = res.searchResults;
        this.isLoading = false;
      });
    }

    this.filteredSource = this.filteredSource.slice(0,6);
  }
}
