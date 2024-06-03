import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-welcome-client',
  templateUrl: './welcome-client.component.html',
  styleUrls: ['./welcome-client.component.css']
})
export class WelcomeClientComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();
  
  login: string ="";
  password: string="";
  authenticationError = false; // Add this variable for authentication error


  currentYear!: number;
  data: string[] = [];


  constructor(
    private router: Router,
    private axiosService: AxiosService,
    private translate: TranslateService
  ) {this.translate.setDefaultLang('fr');}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  onSubmitLogin(): void {
    // Make a POST request to backend '/login' endpoint with login credentials
    this.axiosService.request(
      "POST",
      "/bfi/login",
      { login: this.login, password: this.password }
    ).then(
      (response: any) => {
        this.router.navigate(['/transactions-dashboard']);
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
