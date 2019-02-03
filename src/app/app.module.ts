import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsService } from './services/events.service';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HeaderItemComponent } from './header-item/header-item.component';

const routes: Routes = [
  { path: '', component: ListEventsComponent, pathMatch: 'full'},
  { path: 'Home', component: ListEventsComponent},
  { path: 'Add event', component: AddEventComponent},
  { path: 'About', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListEventsComponent,
    AddEventComponent,
    AboutComponent,
    HeaderComponent,
    HeaderItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
