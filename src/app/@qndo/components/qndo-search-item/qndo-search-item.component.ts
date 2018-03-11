import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'qndo-search-item',
  templateUrl: './qndo-search-item.component.html',
  styleUrls: ['./qndo-search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QndoSearchItemComponent implements OnInit {
  @Input() searchItem: any = {};
  @Input() propertyToShow: string;// = 'value';
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
