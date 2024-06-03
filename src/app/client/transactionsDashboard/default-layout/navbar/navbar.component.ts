import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  page = "Page Name"
  constructor(private router: Router) { }
  logOut(): void {
    localStorage.clear;
    this.router.navigate(['/bfi/login']);
  }
}
