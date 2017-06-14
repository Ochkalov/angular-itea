import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //define array of navigation items:
  navItems: string[] = [
    'Home', 'Catalog', 'About Us'
  ];

  //define array of some strings for using with bold directive
  items: string[] = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'
  ]

  constructor() { }

}
