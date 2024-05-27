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
import { TranslateModule } from '@ngx-translate/core';
import { InformationsMandatairesComponent } from './corporate-dashboard/informations-mandataires/informations-mandataires.component';
import { InformationsEntrepriseComponent } from './corporate-dashboard/informations-entreprise/informations-entreprise.component';
import { AutresInformationsEntrepriseComponent } from './corporate-dashboard/autres-informations-entreprise/autres-informations-entreprise.component';
import { AdresseEntrepriseComponent } from './corporate-dashboard/adresse-entreprise/adresse-entreprise.component';
import { OffresEtDomicialisationEntrepriseComponent } from './corporate-dashboard/offres-et-domicialisation-entreprise/offres-et-domicialisation-entreprise.component';
import { ConditionsGeneralesEntrepriseComponent } from './corporate-dashboard/conditions-generales-entreprise/conditions-generales-entreprise.component';
import { MotDePasseEntrepriseComponent } from './corporate-dashboard/mot-de-passe-entreprise/mot-de-passe-entreprise.component';
import { ValidationEntrepriseComponent } from './corporate-dashboard/validation-entreprise/validation-entreprise.component';
import { TopbarsComponent } from './topbars/topbars.component';
import { TransactionsdashComponent } from './transactionsDashboard/transactionsdash/transactionsdash.component';
import { TransfertRapideComponent } from './transactionsDashboard/transfert-rapide/transfert-rapide.component';
import { TransactionNavComponent } from './transactionsDashboard/default-layout/transaction-nav/transaction-nav.component';
import { GestionUtilisateursComponent } from './transactionsDashboard/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionProfilUtilisateursComponent } from './transactionsDashboard/gestion-profil-utilisateurs/gestion-profil-utilisateurs.component';
import { CreateUserComponent } from './transactionsDashboard/create-user/create-user.component';
import { RendezVousComponent } from './transactionsDashboard/rendez-vous/rendez-vous.component';
import { ReclamationComponent } from './transactionsDashboard/reclamation/reclamation.component';

import { CreateBankAccountComponent } from './transactionsDashboard/create-bank-account/create-bank-account.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ExtraitComponent } from './transactionsDashboard/extrait/extrait.component';
import { ExtraitComponent } from './transactionsDashboard/extrait/extrait.component';
import { EDocumentsComponent } from './transactionsDashboard/e-documents/e-documents.component';
import { NavbarComponent } from './transactionsDashboard/default-layout/navbar/navbar.component';
import { MyContactsComponent } from './transactionsDashboard/my-contacts/my-contacts.component';

import { FilterPipe } from '../filter.pipe';
import { MyContactsAddComponent } from './transactionsDashboard/my-contacts/my-contacts-add/my-contacts-add.component';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { ProfileSettingsComponent } from './transactionsDashboard/profile-settings/profile-settings.component';
import { ProfileSettingsSecurityComponent } from './transactionsDashboard/profile-settings/profile-settings-security/profile-settings-security.component';
import { ProfileSettingsNotificationsComponent } from './transactionsDashboard/profile-settings/profile-settings-notifications/profile-settings-notifications.component';
import { DemandeCarteComponent } from './dashboard/demande-carte/demande-carte.component';
import { VirementComponent } from './dashboard/virement/virement.component';
import { VirementMyContactsComponent } from './dashboard/virement-my-contacts/virement-my-contacts.component';
import { VirementAutreCompteComponent } from './dashboard/virement-autre-compte/virement-autre-compte.component';
import { VirementMultipleComponent } from './dashboard/virement-multiple/virement-multiple.component';
import { VirementPermanentComponent } from './dashboard/virement-permanent/virement-permanent.component';
import { IntrabancaireComponent } from './dashboard/virement-autre-compte/intrabancaire/intrabancaire.component';
import { InterbancaireComponent } from './dashboard/virement-autre-compte/interbancaire/interbancaire.component';
import { ComparaisonComponent } from './dashboard/comparaison/comparaison.component';
import { RechargeCarteComponent } from './transactionsDashboard/recharge-carte/recharge-carte.component';
import { CarteprepayeeComponent } from './transactionsDashboard/carteprepayee/carteprepayee.component';
import { PlacementsComponent } from './transactionsDashboard/placements/placements.component';
import { DepotReraitComponent } from './transactionsDashboard/depot-rerait/depot-rerait.component';



// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();


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
    UpdatedpasswordComponent,
    InformationsMandatairesComponent,
    InformationsEntrepriseComponent,
    AutresInformationsEntrepriseComponent,
    AdresseEntrepriseComponent,
    OffresEtDomicialisationEntrepriseComponent,
    ConditionsGeneralesEntrepriseComponent,
    MotDePasseEntrepriseComponent,
    ValidationEntrepriseComponent,
    TopbarsComponent,
    TransactionsdashComponent,
    TransfertRapideComponent,
    TransactionNavComponent,
    GestionUtilisateursComponent,
    GestionProfilUtilisateursComponent,
    CreateUserComponent,
    RendezVousComponent,
    ReclamationComponent,
    CreateBankAccountComponent,
    ExtraitComponent,
    ExtraitComponent,
    EDocumentsComponent,
    NavbarComponent,
    FilterPipe,
    MyContactsComponent,
    MyContactsAddComponent,
    ProfileSettingsComponent,
    ProfileSettingsSecurityComponent,
    ProfileSettingsNotificationsComponent,
    FilterPipe,
    DemandeCarteComponent,
    VirementComponent,
    VirementMyContactsComponent,
    VirementAutreCompteComponent,
    VirementMultipleComponent,
    VirementPermanentComponent,
    IntrabancaireComponent,
    InterbancaireComponent,
    ComparaisonComponent,
    RechargeCarteComponent,
    CarteprepayeeComponent,
    PlacementsComponent,
    DepotReraitComponent
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
    TranslateModule,
    QRCodeModule,
    NgxScannerQrcodeModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),  
  ],
})
export class ClientModule { }
