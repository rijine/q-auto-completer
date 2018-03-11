import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QndoAutoCompleteComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QndoAutoCompleteComponent],
  exports: [
    QndoAutoCompleteComponent
  ]
})
export class QndoModule {}
