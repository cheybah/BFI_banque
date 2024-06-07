import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Import the AuthService to access temporary stored data
import { AdresseService } from '../../../services/adresse.service'; // Import the AdresseService to access temporary stored data
import { AutresInformationsService } from '../../../services/autres-informations.service'; // Import the AutresInformationsService to access temporary stored data
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service'; // Import the OffresDomiciliationService to access temporary stored data
import Swal from 'sweetalert2';

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

    constructor(
        private router: Router,
        private authService: AuthService,
        private adresseService: AdresseService,
        private autresInformationsService: AutresInformationsService,
        private offresDomiciliationService: OffresDomiciliationService
    ) { }
    generateFourDigitCode(): String {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    
    generateTwentyDigitRIB(): string {
        let rib = '';
        for (let i = 0; i < 20; i++) {
            rib += Math.floor(Math.random() * 10).toString();
        }
        return rib;
    }
    

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
            (message: string) => {
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
            const registerData = this.authService.getTemporaryRegisterData();
            const additionalInfo = this.authService.getTemporaryAdditionalInfo();
            const address = this.authService.getTemporaryAddress();
            const authForm = this.authService.getTemporaryauthData();
           const Login = authForm.login;
           const Password = authForm.password;

            //   if (registerData && additionalInfoData && addressData && offersData) {
            const combinedData = {
                ...registerData,
                address,
                login:Login,
                password:Password,
                additionalInfo,
                agencyId: 1,
                bankAccounts: [{
                    "rib": this.generateTwentyDigitRIB(),
                    "code": this.generateFourDigitCode(),
                }],
                contacts: [] // Initialize contacts as an empty array
            };

            console.log("dataaaa", combinedData);
            this.authService.register(combinedData).subscribe(
                (response) => {
                    console.log('Combined data sent successfully:', response);
                },
                (error) => {
                    console.error('Error sending combined data:', error);
                }
            );

            this.authService.clearTemporaryRegisterData();
            //  }

            this.showSuccessAlert("Email address verified...");
            this.router.navigate(['/welcome']);
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
            confirmButtonColor: '#B48F44',
            timer: 3000
        });
    }

    // Show error alert
    showErrorAlert(message: string): void {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            confirmButtonColor: '#B48F44',
            timer: 3000
        });
    }
}

