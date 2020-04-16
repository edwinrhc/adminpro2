import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`.has-arrow.waves-effect.waves-dark.active {
    background-color: transparent;
    }`
    ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
