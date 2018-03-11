import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QndoModule } from './@qndo/qndo.module';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, QndoModule, AppRoutingModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
