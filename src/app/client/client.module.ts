import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from '../home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";





@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ClientModule { }
