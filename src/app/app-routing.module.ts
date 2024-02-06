import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './client/login/login.component';

const routes: Routes = [
  {path: 'home', children:[
    {path: 'homepage',component:HomepageComponent},
  ]} ,

  {path: 'auth', children:[
    {path: 'login',component:LoginComponent},
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
