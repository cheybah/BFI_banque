import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Import the AuthService to access temporary stored data
import { AdresseService } from '../../../services/adresse.service'; // Import the AdresseService to access temporary stored data
import { AutresInformationsService } from '../../../services/autres-informations.service'; // Import the AutresInformationsService to access temporary stored data
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service'; // Import the OffresDomiciliationService to access temporary stored data


declare let Email: any;

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
    email: string = '';
    otpInput: string = '';
    otpVerifyDisplay: string = 'none';
    otpValue: number = 0;
    showCountdown: boolean = false;
    countdown: number = 30;
    resendButtonText: string = 'Envoyer OTP';
    resendButtonDisabled: boolean = false;

    constructor(  //import the services to access the temporary stored data
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
            SecureToken: "01fe389d-7992-47a3-a455-62b0da19a126",
            To: this.email,
            From: "sourour.methni@gmail.com",
            Subject: "OTP Pour Vérifier l'Email pour BFI",
            Body: emailbody,
        }).then(
            ( message: string) => {
                if (message === "OK") {
                    alert("OTP sent to your email " + this.email);
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
            alert("Votre email a été vérifié avec succès!");
            
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

            this.router.navigate(['/welcome']);

        } else {
            alert("Invalid OTP");
        }
    }
}
