import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
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
import { GestionUtilisateursComponent } from './transactionsDashboard/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionProfilUtilisateursComponent } from './transactionsDashboard/gestion-profil-utilisateurs/gestion-profil-utilisateurs.component';
import { CreateUserComponent } from './transactionsDashboard/create-user/create-user.component';
import { RendezVousComponent } from './transactionsDashboard/rendez-vous/rendez-vous.component';
import { ReclamationComponent } from './transactionsDashboard/reclamation/reclamation.component';
import { EDocumentsComponent } from './transactionsDashboard/e-documents/e-documents.component';
import { MyContactsComponent } from './transactionsDashboard/my-contacts/my-contacts.component';
import { MyContactsAddComponent } from './transactionsDashboard/my-contacts/my-contacts-add/my-contacts-add.component';
import { ProfileSettingsComponent } from './transactionsDashboard/profile-settings/profile-settings.component';
import { ProfileSettingsSecurityComponent } from './transactionsDashboard/profile-settings/profile-settings-security/profile-settings-security.component';
import { ExtraitComponent } from './transactionsDashboard/extrait/extrait.component';
import { DemandeCarteComponent } from './dashboard/demande-carte/demande-carte.component';
import { VirementComponent } from './dashboard/virement/virement.component';
import { VirementMyContactsComponent } from './dashboard/virement-my-contacts/virement-my-contacts.component';
import { VirementPermanentComponent } from './dashboard/virement-permanent/virement-permanent.component';
import { VirementAutreCompteComponent } from './dashboard/virement-autre-compte/virement-autre-compte.component';
import { IntrabancaireComponent } from './dashboard/virement-autre-compte/intrabancaire/intrabancaire.component';
import { InterbancaireComponent } from './dashboard/virement-autre-compte/interbancaire/interbancaire.component';
import { CarteprepayeeComponent } from './transactionsDashboard/carteprepayee/carteprepayee.component';
import { DepotReraitComponent } from './transactionsDashboard/depot-rerait/depot-rerait.component';
import {ChatComponent} from './transactionsDashboard/chat/chat.component';

import { canDeactivateGuard } from '../services/can-deactivate.guard';
import { addRandomSuffix } from 'pdf-lib';
import { AddcontactComponent } from './transactionsDashboard/my-contacts/addcontact/addcontact.component';
import { DepotComponent } from './transactionsDashboard/depot-rerait/depot/depot.component';
import { RetraitComponent } from './transactionsDashboard/depot-rerait/retrait/retrait.component';





const routes: Routes = [
  { path: 'bfi/login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeClientComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'updatedpassword', component: UpdatedpasswordComponent },
  { path: 'reset', component: ResetComponent },
  {
    path: 'dash', component: DashboardComponent, children: [
      { path: 'validation', component: ValidationComponent },
      { path: 'adresse', component: AdresseComponent },
      { path: 'informations-personelles', component: InformationsComponent, canDeactivate: [canDeactivateGuard] },
      { path: 'offres-et-domiciliation', component: OffresEtDomicialisationComponent },
      { path: 'conditions-generales', component: ConditionsGeneralesComponent },
      { path: 'autres-informations', component: AutresInformationsComponent },
      { path: 'mot-de-passe', component: MotDePasseComponent },
    ]
  },

  {
    path: 'professionnel', component: DashboardComponent, children: [
      { path: 'informations-du-mandataire', component: InformationsMandatairesComponent },
      { path: 'informations-entreprise', component: InformationsEntrepriseComponent },
      { path: 'adresse-entreprise', component: AdresseEntrepriseComponent },
      { path: 'autres-informations-entreprise', component: AutresInformationsEntrepriseComponent },
      { path: 'offres-et-domicialiation-entreprise', component: OffresEtDomicialisationEntrepriseComponent },
      { path: 'conditions-generales-entreprise', component: ConditionsGeneralesEntrepriseComponent },
      { path: 'mot-de-passe-entreprise', component: MotDePasseEntrepriseComponent },
      { path: 'validation-entreprise', component: ValidationEntrepriseComponent },

    ]
  },


  { path: 'transactions-dashboard', component: TransactionsdashComponent},
  {path: 'accounts/create', component: CreateBankAccountComponent},
  {path: 'accounts/my-contacts', component: MyContactsComponent},
  {path: 'accounts/my-contacts-add', component: MyContactsAddComponent},
  {path: 'accounts/addcontact', component: AddcontactComponent},

  {path: 'transactions', component: TransactionsdashComponent},
  { path: 'transfert-rapide', component: TransfertRapideComponent}, 
  { path: 'administration/gestion-utilisateurs', component: GestionUtilisateursComponent}, 
  { path: 'administration/gestion-profil-utilisateurs', component: GestionProfilUtilisateursComponent}, 
  { path: 'administration/create-user', component: CreateUserComponent}, 
  { path: 'service-client/rendez-vous', component: RendezVousComponent}, 
  { path: 'service-client/reclamation', component: ReclamationComponent}, 
  {path: 'settings', component: ProfileSettingsComponent},
  {path: 'settings/security', component: ProfileSettingsSecurityComponent},
  { path: 'transactions-dashboard', component: TransactionsdashComponent },
  { path: 'accounts/e-docs', component: EDocumentsComponent },
  { path: 'transactions/virement', component: VirementComponent },
  { path: 'transactions/virement/my-contacts', component: VirementMyContactsComponent },
  { path: 'transactions/virement/autre-contact', component: VirementAutreCompteComponent },
  { path: 'transactions/virement/permanent', component: VirementPermanentComponent },
  { path: 'transactions/virement/depot-retrait', component: DepotReraitComponent },
  { path: 'transactions/virement/depot', component: DepotComponent },
  { path: 'transactions/virement/retrait', component: RetraitComponent },

  { path: 'transactions/virement/autre-contact/intrabancaire', component: IntrabancaireComponent },
  { path: 'transactions/virement/autre-contact/interbancaire', component: InterbancaireComponent },
  { path: 'carteprepayee', component: CarteprepayeeComponent },
  { path: 'transfert-rapide', component: TransfertRapideComponent },
  { path: 'administration/gestion-utilisateurs', component: GestionUtilisateursComponent },
  { path: 'administration/gestion-profil-utilisateurs', component: GestionProfilUtilisateursComponent },
  { path: 'administration/create-user', component: CreateUserComponent },
  { path: 'service-client/rendez-vous', component: RendezVousComponent },
  { path: 'service-client/reclamation', component: ReclamationComponent },
  {path: 'service-client/chat' , component: ChatComponent},
  { path: 'transactions-dashboard/extrait', component: ExtraitComponent },
  { path: 'demande-carte', component: DemandeCarteComponent },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }