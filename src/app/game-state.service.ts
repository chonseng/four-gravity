import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameState } from './game-state';
import { GAME_STATE } from './init-game-state';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }

  getGameState(): Observable<GameState> {
    return of(GAME_STATE)
  }
}
