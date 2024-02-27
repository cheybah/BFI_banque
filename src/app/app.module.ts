import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient  } from "@angular/common/http";
import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { ClientModule } from './client/client.module';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ClientModule,
    FormsModule ,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })  
   
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }