import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover;
  @ViewChild('popover1') popover1;
  isOpen = false;
  isOpen1 = false;
  darktheme = true;
  constructor() { }
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  presentPopover1(e: Event) {
    this.popover1.event = e;
    this.isOpen1 = true;
  }
  ngOnInit() {
    if(this.darktheme){
      this.darktheme = true;
      document.body.setAttribute('color-theme', 'dark');
    } else {
      this.darktheme = false;
      document.body.setAttribute('color-theme', 'light');
    }
  }
  toggle(e){
    if(e==='light'){
      this.darktheme = true;
      document.body.setAttribute('color-theme', 'dark');
    } else {
      this.darktheme = false;
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
