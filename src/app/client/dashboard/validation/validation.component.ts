import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

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

    sendOTP() {
        this.otpValue = Math.floor(1000 + Math.random() * 9000); 

        let emailbody = `<h2>Your OTP is </h2>${this.otpValue}`;
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
                }
            }
        );
    }

    verifyOTP() {
        if (this.otpInput === this.otpValue.toString()) {
            alert("Email address verified...");
        } else {
            alert("Invalid OTP");
        }
    }
}
