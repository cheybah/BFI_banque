
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AxiosService } from 'src/app/services/axios.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();

  login: string = "";
  password: string = "";
  authenticationError = false; // Add this variable for authentication error


  currentYear!: number;
  data: string[] = [];


  constructor(
    private router: Router,
    private axiosService: AxiosService,
    private translate: TranslateService,
    private http: HttpClient
  ) { this.translate.setDefaultLang('fr'); }

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
          console.log(this.login)
          this.axiosService.request('GET', '/getUserId?login=' + this.login, null)
          .then((userId: any) => {
                console.log('User ID:', userId);
                localStorage.setItem('userId', userId.data);

                this.router.navigate(['/transactions-dashboard']);
               
              },
              (error) => {
                console.error('Error fetching user ID:', error);
              }
            );         
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
