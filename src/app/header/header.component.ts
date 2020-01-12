import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded
  }

}
