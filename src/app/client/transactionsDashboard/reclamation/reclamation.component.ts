import { PageTitleService } from 'src/app/services/PageTitleService';
import { Component, OnInit  } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamations.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamations: any[] = [];
  reference: string = '';
  sujet: string = '';
  contenu: string = '';
  date: string = '';
  reponse: string = '';

  referenceCounter: number = 0;

  constructor(private pageTitleService:PageTitleService,private reclamationService: ReclamationService) { }

  ngOnInit() {
        this.pageTitleService.changePageTitle('Réclamation');

    this.reclamationService.getAllReclamations().then(response => {
      this.reclamations = response.data;
      this.updateTableVisibility();
    });
  }

  
  showModal() {
    this.toggleModal('block');
  }

  hideModal() {
    this.toggleModal('none');
  }

  toggleModal(displayStyle: string) {
    const modal = document.getElementById('reclamationModal');
    if (modal) {
      modal.style.display = displayStyle;
  
      // Add an event listener when the modal is shown
      if (displayStyle === 'block') {
        window.onclick = (event: any) => {
          if (event.target == modal) {
            this.hideModal();
          }
        }
      } else {
        // Remove the event listener when the modal is hidden
        window.onclick = null;
      }
    }
  }

  generateReference(): string {
    this.referenceCounter++;
    return '#' + ('000' + this.referenceCounter).slice(-3);
  }

  requestRec(event: Event) {
    event.preventDefault();
    const newReclamation = {
      reference: this.generateReference(),
      sujet: this.sujet,
      contenu: this.contenu,
      date: this.date,
      reponse: this.reponse,
      status: 'Pending',
      clientId: localStorage.getItem('userId')
   };
   console.log('jsson', newReclamation);
    this.reclamationService.createReclamation(newReclamation).then(response => {
      this.reclamations.push(response.data);
      this.updateTableVisibility();
    });
    this.hideModal();
  }

  updateTableVisibility() {
    const illustration = document.getElementById('illustration');
    if (illustration) {
      illustration.style.display = this.reclamations.length > 0 ? 'none' : 'block';
    }
  }
}
