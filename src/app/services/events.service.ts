import { Injectable } from '@angular/core';
import { EventModel } from '../event/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  get() :EventModel[] {
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
}
