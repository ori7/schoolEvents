import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListEventsComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
