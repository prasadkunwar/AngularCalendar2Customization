import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

import {CalendarModule} from '../modules/calendar.module';
import {NGDemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [
    AppComponent,
    EventDialogComponent
  ],
  entryComponents: [EventDialogComponent],
  imports: [
    BrowserModule,
    NGDemoMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
