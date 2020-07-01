import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
// import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // buttons = [
  //   {
  //     icon: 'account_circle',
  //     type: 'account',
  //     check: '1'
  //   },
  //   {
  //     icon: 'notifications_none',
  //     type: 'notifications',
  //     check: '0'
  //   },
  //   {
  //     icon: 'dashboard',
  //     type: 'dashboard',
  //     check: '0'
  //   },
  //   {
  //     icon: 'settings',
  //     type: 'settings',
  //     check: '0'
  //   },
  // ];

  // switch = this.buttons[0].type;
  // openedBoard: any;
  // isDesktopView = window.innerWidth > 768;

  // @HostListener ('window:resize', ['$event'])
  // sizeChange(event) {
  //   this.isDesktopView = event.target.innerWidth > 768;
  // }

  // switchHome(button: any) {
  //   this.switch = button.type;
  // }

  ngOnInit(): void {
  }

}
