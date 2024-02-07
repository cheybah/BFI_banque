import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';




const routes: Routes = [
  {path: 'home', children:[
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