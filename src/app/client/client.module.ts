import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';

import { BodyComponent } from './dashboard/body/body.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { InformationsComponent } from './dashboard/informations/informations.component';
import { AdresseComponent } from './dashboard/adresse/adresse.component';
import { AutresInformationsComponent } from './dashboard/autres-informations/autres-informations.component';
import { OffresEtDomicialisationComponent } from './dashboard/offres-et-domicialisation/offres-et-domicialisation.component';
import { ConditionsGeneralesComponent } from './dashboard/conditions-generales/conditions-generales.component';
import { MotDePasseComponent } from './dashboard/mot-de-passe/mot-de-passe.component';
import { ValidationComponent } from './dashboard/validation/validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';

import { WelcomeClientComponent } from './welcome-client/welcome-client.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { PasswordComponent } from './password/password.component';
import { ResetComponent } from './reset/reset.component';
import { UpdatedpasswordComponent } from './updatedpassword/updatedpassword.component';


export function playerFactory() {
  return player;
}



@NgModule({
  
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    InformationsComponent,
    AdresseComponent,
    AutresInformationsComponent,
    OffresEtDomicialisationComponent,
    ConditionsGeneralesComponent,
    MotDePasseComponent,
    ValidationComponent,
    WelcomeClientComponent,
    PasswordComponent,
    ResetComponent,
    UpdatedpasswordComponent

  ],
  exports: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClientRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    HttpClientModule ,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),  
  ],
})
export class ClientModule { }
