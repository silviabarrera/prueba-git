import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    HeroComponent,
    ContactComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    HttpClientModule,
   
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
