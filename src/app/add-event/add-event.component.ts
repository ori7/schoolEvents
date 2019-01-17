import { Component, OnInit } from '@angular/core';
import { EventModel } from '../event/models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: array of classes from checkbox;

  add(name: string, date: Date, duration: number){

    if (name && date && duration) {
      const event = <EventModel>{
        name: name,
        date: date,
        duration: duration
      }
      this.saveInLocalStorage(name,event);
    }

  }

  saveInLocalStorage(eventname, eventObject) {
    localStorage.setItem(eventname, JSON.stringify(eventObject));
  }

}
