import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';

const routes: Routes = [
  {path: '', children:[
    {path: 'homepage',component:HomepageComponent},
  ]} ,

  {path: 'auth', children:[
    {path: 'login',component:LoginComponent},
    {path: 'signup',component:SignupComponent},


  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
