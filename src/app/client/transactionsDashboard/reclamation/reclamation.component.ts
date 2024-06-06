import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {

  reclamations: any[] = [];
  reference: string = '';
  sujet: string = '';
  contenu: string = '';
  date: string = '';

  referenceCounter: number = 0;
constructor(private pageTitleService:PageTitleService){

}
  ngOnInit(): void {
    this.pageTitleService.changePageTitle('Réclamation');
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
      statut: 'En Cours'
    };
    this.reclamations.push(newReclamation);
    this.hideModal();
    this.updateTableVisibility();
  }

  updateTableVisibility() {
    const illustration = document.getElementById('illustration');
    if (illustration) {
      illustration.style.display = this.reclamations.length > 0 ? 'none' : 'block';
    }
  }
}
