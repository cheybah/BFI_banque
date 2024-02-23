import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AxiosService } from 'src/app/services/axios.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
 
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();
  
  login: string ="";
  newpassword: string="";
  authenticationError = false; // Add this variable for authentication error


  currentYear!: number;
  data: string[] = [];
  errorMessage: any;

  constructor(
    private router: Router,
    private axiosService: AxiosService
  ) {}

  ngOnInit(): void {
    this.getCurrentYear();
  }
  onSubmitUpdatePassword(): void {
    this.errorMessage = ""; // Clear previous error message
    this.axiosService
      .request("PUT", "/reset", { login: this.login, newpassword: this.newpassword }) // send JSON object
      .then(
        (response: any) => {
          console.log("Password updated successfully!");
          this.router.navigate(['/updatedpassword']);        }
      )
      .catch(
        (error: any) => {
          console.error("Error updating password:", error);
          this.errorMessage = error.response.data.message || "An error occurred while updating password";
          // Handle error, maybe show error message to user
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
