import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qndo-search-list',
  templateUrl: './qndo-search-list.component.html',
  styleUrls: ['./qndo-search-list.component.scss']
})
export class QndoSearchListComponent implements OnInit {
  @Input() searchList: any[] = [];
  @Input() propertyToShow: string;// = 'value';

  constructor() {}

  ngOnInit() {}
}
