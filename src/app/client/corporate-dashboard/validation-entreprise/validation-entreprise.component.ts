import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Import the AuthService to access temporary stored data
import { AdresseService } from '../../../services/adresse.service'; // Import the AdresseService to access temporary stored data
import { AutresInformationsService } from '../../../services/autres-informations.service'; // Import the AutresInformationsService to access temporary stored data
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service'; // Import the OffresDomiciliationService to access temporary stored data
import Swal from 'sweetalert2';

declare let Email: any;

@Component({
  selector: 'app-validation-entreprise',
  templateUrl: './validation-entreprise.component.html',
  styleUrls: ['./validation-entreprise.component.css']
})
export class ValidationEntrepriseComponent {
  email: string = '';
  otpInput: string = '';
  otpVerifyDisplay: string = 'none';
  otpValue: number = 0;
  showCountdown: boolean = false;
  countdown: number = 60;
  resendButtonText: string = 'Envoyer OTP';
  resendButtonDisabled: boolean = false;

  constructor( 
      private router: Router,
      private authService: AuthService,
      private adresseService: AdresseService,
      private autresInformationsService: AutresInformationsService,
      private offresDomiciliationService: OffresDomiciliationService
  ) {}


  sendOTP() {
      this.otpValue = Math.floor(1000 + Math.random() * 9000); 

      let emailbody = `<h2>Your OTP is</h2>${this.otpValue}`;
      Email.send({
        Host:"smtp.elasticemail.com",
        Username:"cheymabahroun@gmail.com",
        Password:"2AE8FE0BC29A65363DE1866214A384F9B549",
        Port:"2525",
        To: this.email,
        From: "cheymabahroun@gmail.com",
        Subject: "OTP Pour Vérifier l'Email du compte DigiBank",
        Body: emailbody,
      }).then(
          ( message: string) => {
              if (message === "OK") {
                  this.showSuccessAlert("OTP sent to your email " + this.email);
                  this.otpVerifyDisplay = "flex";

                  // Enable countdown and disable resend button
                  this.showCountdown = true;
                  this.resendButtonDisabled = true;

                  // Start countdown
                  this.startCountdown();
              }
          }
      );
  }

  private startCountdown() {
      const interval = setInterval(() => {
          if (this.countdown > 0) {
              this.countdown--;
          } else {
              // Countdown finished, enable resend button
              this.resendButtonDisabled = false;
              this.resendButtonText = 'Re-envoyer OTP';
              clearInterval(interval);
          }
      }, 1000);
  }

  verifyOTP() {
      if (this.otpInput === this.otpValue.toString()) {            
          // Retrieve all the forms data from temporary storage
          
          const combinedData = this.authService.getTemporaryRegisterData();
          const additionalInfoData = this.autresInformationsService.getTemporaryAdditionalInfoData();
          const offresDomiciliationData = this.offresDomiciliationService.getTemporaryOffersData();
          const addressData = this.adresseService.getTemporaryAddressData();
          
          // Send the forms data to the backend if available
          if (combinedData && additionalInfoData && offresDomiciliationData && addressData) {
              this.authService.register(combinedData).subscribe(
                  (response) => {
                      console.log('Combined data sent successfully:', response);
                  },
                  (error) => {
                      console.error('Error sending combined data:', error);
                  }
              );
              
              this.autresInformationsService.saveAdditionalInfo(additionalInfoData).subscribe(
                  (response) => {
                      console.log('Additional info data sent successfully:', response);
                  },
                  (error) => {
                      console.error('Error sending additional info data:', error);
                  }
              );
              
              this.offresDomiciliationService.saveAccountOffer(offresDomiciliationData).subscribe(
                  (response) => {
                      console.log('Offres domiciliation data sent successfully:', response);
                  },
                  (error) => {
                      console.error('Error sending offres domiciliation data:', error);
                  }
              );
              
              this.adresseService.saveAddress(addressData).subscribe(
                  (response) => {
                      console.log('Address data sent successfully:', response);
                  },
                  (error) => {
                      console.error('Error sending address data:', error);
                  }
              );
              
              // Clear all temporary data after successful sending
              this.authService.clearTemporaryRegisterData();
              this.autresInformationsService.clearTemporaryAdditionalInfoData();
              this.offresDomiciliationService.clearTemporaryOffersData();
              this.adresseService.clearTemporaryAddressData();
          }
          this.showSuccessAlert("Email address verified...");

          this.router.navigate(['/']);
      } else {
          this.showErrorAlert("Invalid OTP");
      }
  }

  // Show success alert
  showSuccessAlert(message: string): void {
      Swal.fire({
          icon: 'success',
          title: 'Success',
          text: message,
          confirmButtonColor:  '#B48F44',
          timer: 3000 
      });
  }

  // Show error alert
  showErrorAlert(message: string): void {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: message,
          confirmButtonColor:  '#B48F44',
          timer: 3000
      });
  }
}

