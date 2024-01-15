import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';

import { HomeComponent } from './components/views/home/home.component';
import { HighlightsComponent } from './components/views/highlights/highlights.component';
import { MakingOfComponent } from './components/views/making-of/making-of.component';
import { NewsComponent } from './components/views/news/news.component';
import { RealeasesComponent } from './components/views/realeases/realeases.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { NewsCardComponent } from './components/cards/news-card/news-card.component';
import { AboutComponent } from './components/about/about.component';
import { MakingofCardComponent } from './components/cards/makingof-card/makingof-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HighlightsComponent,
    MakingOfComponent,
    NewsComponent,
    RealeasesComponent,
    ReturnButtonComponent,
    NewsCardComponent,
    AboutComponent,
    MakingofCardComponent,

  ],
  imports: [HeaderComponent,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
