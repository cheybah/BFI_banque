
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/services/PageTitleService';
import { AxiosService } from 'src/app/services/axios.service';
import { Virement } from './Virement';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  transfer: Virement = {
    clientId: 0,
    compteADebiter: '',
    compteACrediter: '',
    montant: 0,
    motif: ''
  };

  verifpassword = false;
  isMobile = false;

  constructor(
    private router: Router,
    private axiosService: AxiosService,
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit(): void {
    this.pageTitleService.changePageTitle('Virement');
    const userId = this.axiosService.getUserId();
    this.transfer.clientId = userId !== null ? parseInt(userId) : 0;
    console.log("user id est :", this.transfer.clientId);
  }

  submitTransfer(): void {
    console.log('Transfer data:', this.transfer);
    this.axiosService.request('POST', `/virements`, this.transfer)
      .then(response => {
        console.log('Response:', response);
        console.log('Virement à étè effectué avec succès:');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Votre Virement à étè  effectué avec succès",
          confirmButtonColor: '#B48F44',
          timer: 3000
        });
      })
      .catch(error => {
        console.error('Erreur lors du virement:', error);
        let errorMessage = 'Erreur lors du virement';
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
          if (errorMessage === 'Compte à débiter non trouvé') {
            errorMessage = 'Le compte à débiter n\'existe pas.';
          }
          if (errorMessage === 'Compte à créditer non trouvé') {
            errorMessage = 'Le compte à créditer n\'existe pas.';
          }

          if (errorMessage === 'Solde insuffisant') {
            errorMessage = 'Solde insuffisant dans le compte à débiter.';
          }

        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          confirmButtonColor: '#B48F44',
          text: errorMessage,
          timer: 3000
        });
      });
  }



  GoToMyContacts() {
    window.location.reload();
    this.router.navigate(['transactions/virement/my-contacts']);
  }

  GoToAutreCompte() {
    this.router.navigate(['transactions/virement/autre-contact']);
  }

  GoToPermanent() {
    this.router.navigate(['transactions/virement/permanent']);
  }

  GoToMultipleContact() {
    this.router.navigate(['transactions/virement/multiple']);
  }
}
