import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitleService';
import { RendezvousService } from 'src/app/services/rendezvous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css'],

})
export class RendezVousComponent {
  appointments: any[] = [];
  reason: string = '';
  date: string = '';
  heure: string = '';
  amPm: string = '';
  agence: string = '';
  agences: string[] = ['AGENCE DE TUNIS', 'AGENCE DE DJERBA', 'AGENCE DE SFAX'];

  constructor(private rendezVousService: RendezvousService,private pageTitleService: PageTitleService) { }

  ngOnInit() {
        this.pageTitleService.changePageTitle('Rendez-Vous');

    this.rendezVousService.getAllRendezVous().then(response => {
      this.appointments = response.data;
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
    const modal = document.getElementById('appointmentModal');
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
  

  requestRdv(event: Event) {
    event.preventDefault();
    const newAppointment = {
      agence: this.agence,
      raison: this.reason,
      date: this.date,
      heure: `${this.heure} ${this.amPm}`,
      status: 'Pending',
      clientId: localStorage.getItem('userId')
    };
    console.log('jsson', newAppointment);
    this.rendezVousService.createRendezVous(newAppointment).then(response => {
      this.appointments.push(response.data);
      this.updateTableVisibility();
    });
    this.hideModal();
  }

  updateTableVisibility() {
    const illustration = document.getElementById('illustration');
    if (illustration) {
      illustration.style.display = this.appointments.length > 0 ? 'none' : 'block';
    }
  }
}
