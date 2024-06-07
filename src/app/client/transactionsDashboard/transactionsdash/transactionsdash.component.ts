import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountService } from 'src/app/services/bankAccountService';
import { AnimationOptions } from 'ngx-lottie'; // Import Lottie types
import { gettingRegisterDetailsPhysical } from 'src/app/services/gettingRegisterDetailsPhysical';
import { PageTitleService } from 'src/app/services/PageTitleService';


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
  clientDetails: any={};
  firstName: string="";
  lastName: string="";
  email: string="";
  gender: string="";
  photo: string="";
  phoneNumber: string="";
  dateOfBirth:Date =new Date();
  login: string="";
  password: string="";
  status: boolean=true;
  address: any;
  agency:any;
  bankAccountList: any;
  rendezVous: any;
  notifications:any;
  reclamations: any;
  contacts: any;
  additionalInfo: any;
  showWelcomeMessage = true; // Control the visibility of the welcome message
  constructor( private pageTitleService:PageTitleService, private route :ActivatedRoute,private router:Router,private bankAccountService :BankAccountService,private gettingRegisterDetailsPhysical:gettingRegisterDetailsPhysical){}
 
  ngOnInit(): void {
    this.pageTitleService.changePagePageTitle('Tableau de board');

    this.gettingRegisterDetailsPhysical.GetprofileInfo().then(response => {
      this.clientDetails = response.data;
      // Assignation des détails du client aux variables correspondantes
      this.firstName = this.clientDetails.firstName || '';
      this.lastName = this.clientDetails.lastName || '';
      this.email = this.clientDetails.email || '';
      this.gender = this.clientDetails.gender || '';
      this.photo = this.clientDetails.photo || '';
      this.phoneNumber = this.clientDetails.phoneNumber || '';
      this.dateOfBirth = new Date(this.clientDetails.dateOfBirth) || new Date();
      this.login = this.clientDetails.login || '';
      this.password = this.clientDetails.password || '';
      this.status = this.clientDetails.status || true;
      this.address = this.clientDetails.address || {};
      this.agency = this.clientDetails.agency || {};
      this.bankAccountList = this.clientDetails.bankAccountList || [];
      this.rendezVous = this.clientDetails.rendezVous || [];
      this.notifications = this.clientDetails.notifications || [];
      this.reclamations = this.clientDetails.reclamations || [];
      this.contacts = this.clientDetails.contacts || [];
      this.additionalInfo = this.clientDetails.additionalInfo || {};
          // Hide the welcome message after 3 seconds
    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, 3000);
    });
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

