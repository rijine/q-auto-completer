import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Auto complete Demo';
  localSource: any[] = [
    { value: 'Michel Jack' },
    { value: 'Vin Deisel' },
    { value: 'Jacki Chan' },
    { value: 'Aronold' },
    { value: 'Brad Pitt' },
    { value: 'Russel Crowe' },
    { value: 'Heath Ledger' },
    { value: 'Robert Downey' }
  ];
  remoteSource: any;
  selectedItem1: any = '';
  selectedItem2: any = '';

  constructor(private searchService: SearchService) {}
  ngOnInit() {
    this.remoteSource = keyword => this.searchService.getSearchResults(keyword);
  }
  selectItem(value) {
    console.log(value);
    //this.selectedItem1 = value;
  }
}
