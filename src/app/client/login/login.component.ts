import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
]
})
export class LoginComponent implements OnInit {
  currentYear!: number;

 
  
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }

  signIn(): void {
  }

  
  goToHome(): void {
    this.router.navigate(['/home/homepage']);
  }


}