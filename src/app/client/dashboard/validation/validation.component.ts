import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AdresseService } from '../../../services/adresse.service';
import { AutresInformationsService } from '../../../services/autres-informations.service';
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service';
import { AxiosService } from '../../../services/axios.service';
import Swal from 'sweetalert2';

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
        private offresDomiciliationService: OffresDomiciliationService,
        private axiosService: AxiosService
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
        let emailBody = `Votre OTP est : ${this.otpValue}`;
        this.axiosService.sendOtpEmail(this.email, "OTP Pour Vérifier l'Email pour création de compte DigiBank ", emailBody)
            .then(() => {
                this.showSuccessAlert("OTP envoyé à votre adresse email " + this.email);
                this.otpVerifyDisplay = "flex";

                this.showCountdown = true;
                this.resendButtonDisabled = true;

                this.startCountdown();
            })
            .catch(error => {
                this.showErrorAlert("Échec de l'envoi d'OTP :" + error.message);
            });
    }

    private startCountdown() {
        const interval = setInterval(() => {
            if (this.countdown > 0) {
                this.countdown--;
            } else {
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
            const login = authForm.login;
            const password = authForm.password;

            const combinedData = {
                ...registerData,
                address,
                login,
                password,
                additionalInfo,
                agencyId: 1,
                bankAccounts: [{
                    "rib": this.generateTwentyDigitRIB(),
                    "code": this.generateFourDigitCode(),
                }],
                contacts: []
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
            this.showSuccessAlert("Adressse Email  vérifiée...");
            this.router.navigate(['/welcome']);
        } else {
            this.showErrorAlert("OTP invalide");
        }
    }

    showSuccessAlert(message: string): void {
        Swal.fire({
            icon: 'success',
            title: 'succès',
            text: message,
            confirmButtonColor: '#B48F44',
            timer: 3000
        });
    }

    showErrorAlert(message: string): void {
        Swal.fire({
            icon: 'error',
            title: 'erreur',
            text: message,
            confirmButtonColor: '#B48F44',
            timer: 3000
        });
    }
}
