import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { HelpComponent } from './help/help.component';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StarterComponent },
  { path: 'game', component: GameComponent },
  { path: 'how-to-play', component: HelpComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
