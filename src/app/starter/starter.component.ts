import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

// import swal from 'sweetalert';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})

export class StarterComponent implements OnInit {
  sizeOptions: number[] = [...Array(5).keys()].map(x => x+=8)
  numOfPlayersOptions: number[] = [...Array(5).keys()].map(x => x += 2)

  gameState: GameState

  
  constructor(private router: Router,
              private gameStateService: GameStateService) { }

  ngOnInit() {
    this.getGameState()
  }

  getGameState(): void {
    this.gameStateService.getGameState()
      .subscribe(gameState => this.gameState = gameState)
  }
  
  onChooseSize(size: number) {
    this.gameState.size = size
  }

  onChooseNumOfPlayers(numOfPlayers: number) {
    this.gameState.numOfPlayers = numOfPlayers
  }

  initGameState() {
    this.gameState.gameEnded = false
    this.gameState.canRetract = false
    this.gameState.turn = 1
    this.gameState.tiles = []
    this.gameState.availableMoves = this.gameState.size * this.gameState.size
    this.gameState.preMoveTile = null
    this.gameState.updatedIsValidTiles = []
    // only leraning mode setting is kept
  }

  onNewGame() {
    this.initGameState()
    this.router.navigate(['/game'])
  }
}
