import { Injectable } from '@angular/core';
import { EventModel } from '../event/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  get(): EventModel[] {
    return [
      {
        name: 'Tu-bishvat',
        date: new Date(2019, 0, 20),
        duration: 2,
        classes: [
          'a', 'b', 'c'
        ]
      },
      {
        name: 'Purim',
        date: new Date(2019, 1, 15),
        duration: 5,
        classes: [
          'd', 'e'
        ]
      }
    ];
  }

  allStorage(): EventModel[] {

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      const event = JSON.parse(localStorage.getItem(keys[i]));
      values.push(event);
    }

    return values;
  }

  /*

  getFromLocalStorage() : EventModel[] {
    const eventsArray = [];
    for (let i = 0; ; i++) {
      const event = JSON.parse(localStorage.getItem(i));
      if (event === null)
        break;
      eventsArray.push(event);
    }
    return eventsArray;
  }

  */

}
