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
    ValidationComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
