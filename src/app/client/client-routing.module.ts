import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { AdresseComponent } from './dashboard/adresse/adresse.component';
import { InformationsComponent } from './dashboard/informations/informations.component';
import { OffresEtDomicialisationComponent } from './dashboard/offres-et-domicialisation/offres-et-domicialisation.component';
import { ConditionsGeneralesComponent } from './dashboard/conditions-generales/conditions-generales.component';
import { AutresInformationsComponent } from './dashboard/autres-informations/autres-informations.component';
import { MotDePasseComponent } from './dashboard/mot-de-passe/mot-de-passe.component';
import { ValidationComponent } from './dashboard/validation/validation.component';
import { WelcomeClientComponent } from './welcome-client/welcome-client.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'welcome', component: WelcomeClientComponent },
    { path: '', redirectTo :'dash',pathMatch :'full' },
    { path: 'dash', component: DashboardComponent, children: [
      { path: 'validation', component: ValidationComponent }, 
      { path: 'adresse', component: AdresseComponent },
      { path: 'informations-personelles', component: InformationsComponent },
      { path: 'offres-et-domicialisation', component: OffresEtDomicialisationComponent },
      { path: 'conditions-generales', component: ConditionsGeneralesComponent },
      { path: 'autres-informations', component: AutresInformationsComponent },
      { path: 'mot-de-passe', component: MotDePasseComponent },

      
  ]},   
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClientRoutingModule { }