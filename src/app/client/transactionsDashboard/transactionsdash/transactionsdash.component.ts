import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountService } from 'src/app/services/bankAccountService';
import { AnimationOptions } from 'ngx-lottie'; // Import Lottie types


@Component({
  selector: 'app-transactionsdash',
  templateUrl: './transactionsdash.component.html',
  styleUrls: ['./transactionsdash.component.css']
})

export class TransactionsdashComponent implements OnInit {
  clientId: number | null = null; 
  bankAccount: any; 
  extractedRIB: string = '';
  solde: number=0;
  constructor( private route :ActivatedRoute,private router:Router,private bankAccountService :BankAccountService){}
 
  ngOnInit(): void {
    const clientIdStr = localStorage.getItem('userId');
    if (clientIdStr !== null) {
      this.clientId = parseInt(clientIdStr, 10);
      // Vérifier si la conversion a réussi
      if (!isNaN(this.clientId)) {
        // Appeler le service pour récupérer les détails du compte bancaire du client
        this.bankAccountService.getBankAccountByClientId(this.clientId)
          .subscribe((data: any) => {
            // Vérifier si data est un tableau et s'il contient des éléments
            if (Array.isArray(data) && data.length > 0) {
              this.bankAccount = data[0]; // Prendre le premier élément du tableau
              console.log("Réponse complète de l'API:", this.bankAccount);
              console.log("RIB:", this.bankAccount.rib);
              this.extractedRIB = this.bankAccount.rib.substring(7, 14);
              this.solde=this.bankAccount.solde;
            } else {
              console.error('No bank account details found');
            }
          }, (error) => {
            console.error('Error fetching bank account details:', error);
          });
      } else {
        console.error('Invalid user ID format');
      }
    } else {
      console.error('User ID is not available in localStorage');
      // Gérer le cas où l'ID utilisateur n'est pas disponible dans le localStorage
    }
  }

  lottieOptions: AnimationOptions = {
    path: "/assets/lottie/dash-client.json", // Path to your Lottie JSON file
  };
  

  // Function to handle animation creation event
  animationCreated(animation: any) {
    console.log('Lottie animation created:', animation);
  }


  goToExtrait(): void {
    this.router.navigate(['/transactions-dashboard/extrait']);
  }
  GoToContacts(){
    this.router.navigate(['/accounts/my-contacts-add']);
  }

}

