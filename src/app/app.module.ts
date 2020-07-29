import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TopicsComponent } from './topics/topics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AlltopicsComponent } from './alltopics/alltopics.component';
import { InspiredComponent } from './inspired/inspired.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TopicsComponent,
    AboutusComponent,
    AlltopicsComponent,
    InspiredComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
