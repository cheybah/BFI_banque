import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings-security',
  templateUrl: './profile-settings-security.component.html',
  styleUrls: ['./profile-settings-security.component.css']
})
export class ProfileSettingsSecurityComponent {
  passwordVisible: boolean = false;
  apiKey: string = ''; // Variable to store the generated key

  togglePasswordVisibility(event: MouseEvent, inputId: string): void {
    event.preventDefault();
    this.passwordVisible = !this.passwordVisible;
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    inputElement.type = this.passwordVisible ? 'text' : 'password';
  }

  generateKey(): void {
    const pinCode = Math.floor(100000 + Math.random() * 900000).toString();
    this.apiKey = pinCode;
  }
}
