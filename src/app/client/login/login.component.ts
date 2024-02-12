import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();
  
  login: string ="";
  password: string="";
  authenticationError = false; // Add this variable for authentication error


  currentYear!: number;
  data: string[] = [];

  constructor(
    private router: Router,
    private axiosService: AxiosService
  ) {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  onSubmitLogin(): void {
    // Make a POST request to backend '/login' endpoint with login credentials
    this.axiosService.request(
      "POST",
      "/login",
      { login: this.login, password: this.password }
    ).then(
      (response: any) => {
        // Upon successful authentication, navigate to the welcome client component
        this.router.navigate(['/welcome']);
      }
    ).catch(
      (error: any) => {
        console.error("Error logging in:", error);
        this.authenticationError = true;
        // Handle errors appropriately (e.g., display error message to the user)
      }
    );
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }

  goToHome(): void {
    this.router.navigate(['/homepage']);
  }
}
