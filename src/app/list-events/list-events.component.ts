import { Component, OnInit } from '@angular/core';
import { EventModel } from '../event/models/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events: EventModel[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.get();
  }

}
