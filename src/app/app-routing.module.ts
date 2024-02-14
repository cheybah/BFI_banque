import { NgModule } from '@angular/core';

import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path: '', children:[
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Redirect empty path to '/homepage'
    {path: 'homepage',component:HomepageComponent},
  ]} ,

  {path: 'auth', children:[
    {path: 'login',component:LoginComponent},
    {path: 'signup',component:SignupComponent},
    {path: 'dash',component:DashboardComponent}


  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }