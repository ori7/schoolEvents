import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-header-item]',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
