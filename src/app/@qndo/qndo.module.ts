import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QndoAutoCompleteComponent } from './components/qndo-auto-complete/qndo-auto-complete.component';
import { QndoSearchItemComponent } from './components/qndo-search-item/qndo-search-item.component';
import { QndoSearchListComponent } from './components/qndo-search-list/qndo-search-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QndoAutoCompleteComponent, QndoSearchItemComponent, QndoSearchListComponent],
  exports: [
    QndoAutoCompleteComponent
  ]
})
export class QndoModule {}
