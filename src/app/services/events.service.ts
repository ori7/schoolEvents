import { Injectable } from '@angular/core';
import { EventModel } from '../event/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: EventModel[] = [
    {
      id: 1,
      name: 'Tu-bishvat',
      date: new Date(2019, 0, 20),
      duration: 2,
      classes: [
        'a', 'b', 'c'
      ]
    },
    {
      id: 2,
      name: 'Purim',
      date: new Date(2019, 1, 15),
      duration: 5,
      classes: [
        'd', 'e'
      ]
    },
    {
      id: 3,
      name: 'Purim 2',
      date: new Date(2019, 1, 15),
      duration: 4,
      classes: [
        'a', 'b'
      ]
    }
  ]

  get(): EventModel[] {
    return this.events;
  }

  saveInLocalStorage(): void {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  getFromLocalStorage() : EventModel[] {
    const eventsArray = JSON.parse(localStorage.getItem('events'));
    return eventsArray;
  }

}
