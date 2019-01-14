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

  add(name: string, date: Date, duration: number, classes: string[]){

    if (!name && !date && !duration && !classes) {
      const event = <EventModel>{
        name: name,
        date: date,
        duration: duration,
        classes: classes
      }
      
    }

  }

}
