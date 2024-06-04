import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css'],
  encapsulation: ViewEncapsulation.Emulated // or ViewEncapsulation.ShadowDom

})
export class RendezVousComponent {
  appointments: any[] = [];
  reason: string = '';
  date: string = '';
  hour: string = '';
  amPm: string = '';
  agence: string = '';
  agences: string[] = ['AGENCE DE TUNIS', 'AGENCE DE DJERBA', 'AGENCE DE SFAX'];


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
      hour: `${this.hour} ${this.amPm}`,
      statut: 'Pending'
    };
    this.appointments.push(newAppointment);
    this.hideModal();
    this.updateTableVisibility();
  }

  updateTableVisibility() {
    const illustration = document.getElementById('illustration');
    if (illustration) {
      illustration.style.display = this.appointments.length > 0 ? 'none' : 'block';
    }
  }
}
