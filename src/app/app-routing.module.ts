import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';




const routes: Routes = [
  {path: '', children:[
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Redirect empty path to '/homepage'
    {path: 'homepage',component:HomepageComponent},
  ]} ,

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }