import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
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
  */

}