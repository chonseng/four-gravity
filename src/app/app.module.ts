import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    GameComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
