import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AxiosService } from 'src/app/services/axios.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms


declare let Email: any;
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent  implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();

  passwordResetForm: FormGroup; 
  siteKey: string = '6Lc-iIMpAAAAAAYogzu3h64YfwlAZfUjhItj1UZN'; // Add this variable for reCAPTCHA
  captchaVerified: boolean = false;

  
  emailreset: string="";
  password: string="";
  lien: string="http://localhost:4200/reset";
  authenticationError = false; // Add this variable for authentication error


  currentYear!: number;
  data: string[] = [];


  constructor(
    private router: Router,
    private axiosService: AxiosService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {    
    this.passwordResetForm = this.formBuilder.group({
    emailreset: ['', [Validators.required, Validators.email]]
  });
}

ngOnInit(): void {
  this.getCurrentYear();
  this.passwordResetForm = this.formBuilder.group({
    recaptcha: ['', Validators.required],
  });
}
 
handleSuccess(event: any) {
  console.log('reCAPTCHA success:', event);
  setTimeout(() => {
    this.captchaVerified = true;
  }, 750); 
}


  onSubmitReset(){
    console.log(this.passwordResetForm.value); // Example: Log form values to the console
    if (!this.emailreset) {
      // Utiliser une alerte stylisée
      this.showAlert("Veuillez saisir une adresse e-mail.");
      return;
    }
    this.http.get<any>(`http://localhost:8080/check-email?email=${this.emailreset}`).subscribe(
      (response: any) => {
        if (response && response.exists) {
          // Envoyer le lien de réinitialisation par e-mail
          this.sendResetLink();
        } else {
          // Afficher un message d'erreur à l'utilisateur
          this.showAlert("L'adresse e-mail n'existe pas.");
        }
      },
      (error: any) => {
        console.error("Erreur lors de la vérification de l'e-mail:", error);
        // Gérer les erreurs appropriément
      }
    );
  }
  
  sendResetLink() {
    console.log("sou");
    let emailbody = `<h2>Pour réinitialiser votre mot de passe cliquer ici: <a href="${this.lien}">${this.lien}</a></h2>`;
    Email.send({
        SecureToken: "01fe389d-7992-47a3-a455-62b0da19a126",
        To: this.emailreset,
        From: "sourour.methni@gmail.com",
        Subject: "Lien de réinitialisation de mot de passe",
        Body: emailbody,
    }).then(
        ( message: string) => {
            if (message === "OK") {
                // Utiliser une alerte stylisée
                this.showAnimatedAlert("Lien de réinitialisation envoyé à votre email : " + this.emailreset);
            }
        }
    );  
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }

  goToHome(): void {
    this.router.navigate(['/homepage']);
  }

  showAlert(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonColor:  '#B48F44',
      timer: 3000
  });  }

  // Fonction pour afficher une alerte animée
  showAnimatedAlert(message: string): void {
 
    Swal.fire({
      icon: 'success',
      title: 'Succès!',
      text: message,
      confirmButtonColor:  '#B48F44',
      timer: 3000 
    });
  }
}