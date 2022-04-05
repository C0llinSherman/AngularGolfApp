import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreCardComponent } from './modules/score-card/score-card.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { SetUpComponent } from './modules/set-up/set-up.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'  ;


@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    WelcomeComponent,
    SetUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
