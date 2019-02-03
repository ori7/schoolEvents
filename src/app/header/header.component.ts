import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items;
  constructor() {
    this.items = [
      'Home',
      'Add event',
      'About'
    ];
   }

  ngOnInit() {
  }

}
