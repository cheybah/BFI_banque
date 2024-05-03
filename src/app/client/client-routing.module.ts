import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent} from "./dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { InformationsComponent } from './dashboard/informations/informations.component';
import { ConditionsGeneralesComponent } from './dashboard/conditions-generales/conditions-generales.component';
import { MotDePasseComponent } from './dashboard/mot-de-passe/mot-de-passe.component';
import { ValidationComponent } from './dashboard/validation/validation.component';
import { WelcomeClientComponent } from './welcome-client/welcome-client.component';
import { PasswordComponent } from './password/password.component';
import { ResetComponent } from './reset/reset.component';
import { UpdatedpasswordComponent } from './updatedpassword/updatedpassword.component';
import { InformationsMandatairesComponent } from './corporate-dashboard/informations-mandataires/informations-mandataires.component';
import { InformationsEntrepriseComponent } from './corporate-dashboard/informations-entreprise/informations-entreprise.component';
import { AdresseComponent } from './dashboard/adresse/adresse.component';
import { AutresInformationsComponent } from './dashboard/autres-informations/autres-informations.component';
import { AutresInformationsEntrepriseComponent } from './corporate-dashboard/autres-informations-entreprise/autres-informations-entreprise.component';
import { AdresseEntrepriseComponent } from './corporate-dashboard/adresse-entreprise/adresse-entreprise.component';
import { OffresEtDomicialisationComponent } from './dashboard/offres-et-domicialisation/offres-et-domicialisation.component';
import { OffresEtDomicialisationEntrepriseComponent } from './corporate-dashboard/offres-et-domicialisation-entreprise/offres-et-domicialisation-entreprise.component';
import { MotDePasseEntrepriseComponent } from './corporate-dashboard/mot-de-passe-entreprise/mot-de-passe-entreprise.component';
import { ValidationEntrepriseComponent } from './corporate-dashboard/validation-entreprise/validation-entreprise.component';
import { ConditionsGeneralesEntrepriseComponent } from './corporate-dashboard/conditions-generales-entreprise/conditions-generales-entreprise.component';
import { TransactionsdashComponent } from './transactionsDashboard/transactionsdash/transactionsdash.component';
import { CreateBankAccountComponent } from './transactionsDashboard/create-bank-account/create-bank-account.component';
import { TransfertRapideComponent } from './transactionsDashboard/transfert-rapide/transfert-rapide.component';


const routes: Routes = [
    { path: 'bfi/login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'welcome', component: WelcomeClientComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'updatedpassword', component: UpdatedpasswordComponent },

    { path: 'reset', component: ResetComponent },

    { path: 'dash', component: DashboardComponent, children: [
      { path: 'validation', component: ValidationComponent }, 
      { path: 'adresse', component: AdresseComponent },
      { path: 'informations-personelles', component: InformationsComponent },
      { path: 'offres-et-domiciliation', component: OffresEtDomicialisationComponent },
      { path: 'conditions-generales', component: ConditionsGeneralesComponent },
      { path: 'autres-informations', component: AutresInformationsComponent },
      { path: 'mot-de-passe', component: MotDePasseComponent },  
  ]},   
  
    { path: 'professionnel', component: DashboardComponent, children: [
      { path: 'informations-du-mandataire', component: InformationsMandatairesComponent },
      { path: 'informations-entreprise', component: InformationsEntrepriseComponent }, 
      { path: 'adresse-entreprise', component: AdresseEntrepriseComponent },
      { path: 'autres-informations-entreprise', component: AutresInformationsEntrepriseComponent },
      { path: 'offres-et-domicialiation-entreprise', component: OffresEtDomicialisationEntrepriseComponent },
      { path: 'conditions-generales-entreprise', component: ConditionsGeneralesEntrepriseComponent },
      { path: 'mot-de-passe-entreprise', component: MotDePasseEntrepriseComponent },  
      { path: 'validation-entreprise', component: ValidationEntrepriseComponent }, 

  ]}, 

  { path: 'transactions-dashboard', component: TransactionsdashComponent},
  {path: 'accounts-create', component: CreateBankAccountComponent},
  {path: 'transactions', component: TransactionsdashComponent},
  { path: 'transfert-rapide', component: TransfertRapideComponent}, 

  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClientRoutingModule { }