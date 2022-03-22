import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamClick: any;

  navLink: any = [
    {
      name: "Health Plans",
      link: "/individual",
      subLinks: []
    },
    {
      name: "Providers",
      link: "/provider",
      subLinks: []
    },
    {
      name: "About Us",
      link: "/about",
      subLinks: []
    },
    {
      name: "Blog",
      link: "/blog",
      subLinks: []
    },
    {
      name: "Contact",
      link: "/contact",
      subLinks: []
    }
  ]

  signedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Close Menu
  closeMenu() {
    this.hamClick = false
  }

}
