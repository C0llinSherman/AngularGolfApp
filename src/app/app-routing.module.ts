import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreCardComponent } from './modules/score-card/score-card.component';
import { SetUpComponent } from './modules/set-up/set-up.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const routes: Routes = [
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'score-card', component: ScoreCardComponent },
  { path: 'set-up', component: SetUpComponent},

  { path: '**', component: SetUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
