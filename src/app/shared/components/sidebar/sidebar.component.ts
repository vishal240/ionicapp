import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Products',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'About',
      icon: 'information',
      path: '/about'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
