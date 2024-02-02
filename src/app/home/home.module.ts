import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { OffersComponent } from './offers/offers.component';
import { ProcessComponent } from './process/process.component';
import { PartnersComponent } from './partners/partners.component';
import { CounterComponent } from './counter/counter.component';
import { DetailsComponent } from './details/details.component';
import { PacksComponent } from './packs/packs.component';



@NgModule({
  declarations: [
    HomepageComponent,
    TopbarComponent,
    ServicesComponent,
    AboutusComponent,
    FooterComponent,
    BlogComponent,
    OffersComponent,
    ProcessComponent,
    PartnersComponent,
    CounterComponent,
    DetailsComponent,
    PacksComponent
  ],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
