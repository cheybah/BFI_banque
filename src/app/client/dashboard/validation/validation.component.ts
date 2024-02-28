import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private router: Router) {}

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
                    this.showSuccessAlert("OTP sent to your email " + this.email);
                    this.otpVerifyDisplay = "flex";
                }
            }
        );
    }

    verifyOTP() {
        if (this.otpInput === this.otpValue.toString()) {
            this.showSuccessAlert("Email address verified...");
            this.router.navigate(['/welcome']);
        } else {
            this.showErrorAlert("Invalid OTP");
        }
    }

    // Fonction pour afficher une alerte de succès
    showSuccessAlert(message: string): void {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
            confirmButtonColor:  '#B48F44',
            timer: 3000 
        });
    }

    // Fonction pour afficher une alerte d'erreur
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
