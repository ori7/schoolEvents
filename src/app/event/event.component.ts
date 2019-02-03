import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventModel } from './models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EventModel;
  @Output() deliteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  delite(): void {
    const eventId = this.event.id;
    this.deliteEvent.emit(eventId);
  }

}