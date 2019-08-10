import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tile } from '../tile';

import { GameState } from '../game-state';
import { GameStateService } from '../game-state.service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

class Coordinate {
  r: number;
  c: number;
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  PLAYER_NAME: string[] = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
  FOUR: number = 4
  // Tile margin
  MARGIN: number = 2

  gameState: GameState

  constructor(private router: Router,
              private gameStateService: GameStateService) { }


  ngOnInit() {
    // Get gameState
    this.getGameState()
    if (this.gameState.tiles.length == 0) {
      const EDGE_INDICES = [0, this.gameState.size - 1]
      for (let i of Array(this.gameState.size).keys()) {
        let row = []
        for (let j of Array(this.gameState.size).keys()) {
          let tile: Tile = {
            r: i,
            c: j,
            player: 0,
            isValid: EDGE_INDICES.includes(i) || EDGE_INDICES.includes(j),
            isPartOfWinStreak: false,
          }
          row.push(tile)
        }
        this.gameState.tiles.push(row)
      }
      console.log(this.gameState.tiles)
    }
  }

  getGameState(): void {
    this.gameStateService.getGameState()
      .subscribe(gameState => this.gameState = gameState)
  }

  static clone(arr) {
    let newArray = []
    arr.forEach((row, index) => {
      newArray.push(row.slice())
    })
    return newArray
  }

  setTileClasses(tile) {
    let classes = {}
    classes['valid'] = tile.isValid
    classes['wonStreak'] = tile.isPartOfWinStreak
    let playerStr = 'player' + tile.player
    classes[playerStr] = true
    return classes
  }

  trackByFn(index: number, status: number[][]) {
    return status[index]
  }


  nextTurn(turn: number) {
    turn += 1
    if (turn > this.gameState.numOfPlayers)
      turn = 1
    return turn
  }

  preTurn(turn: number) {
    turn -= 1
    if (turn <= 0)
      turn = this.gameState.numOfPlayers
    return turn
  }

  isOutOfBound(n: number) {
    return (n < 0) || (n >= this.gameState.size)
  }

  updateIsValid(tile: Tile) {
    tile.isValid = false
    let end: number = this.gameState.size - 1
    let rowPositions: number[] = [0, end, tile.r, tile.r]
    let colPositions: number[] = [tile.c, tile.c, 0, end]
    let rowOperators: number[] = [+1, -1, 0, 0]
    let colOperators: number[] = [0, 0, +1, -1]
    for (let i of Array(4).keys()) {
      let row: number = rowPositions[i]
      let col: number = colPositions[i]
      let rowOptr: number = rowOperators[i]
      let colOptr: number = colOperators[i]
      for (let _ of Array(this.gameState.size)) {
        let curTile: Tile = this.gameState.tiles[row][col]
        if (curTile.player == 0) {
          if (curTile.isValid == true) {
            break
          } else {
            curTile.isValid = true
            this.gameState.updatedIsValidTiles.push(curTile)
            break
          }
        }
        row += rowOptr
        col += colOptr
      }
    }
  }

  checkWinCondition(tile: Tile) {
    // left to right
    // top to bottom
    // top left to bottom right
    // top right to bottom left
    let hasWon = false
    let rowPositions: number[] = [tile.r, tile.r-3, tile.r-3, tile.r-3]
    let colPositions: number[] = [tile.c-3, tile.c, tile.c-3, tile.c+3]
    let rowOperators: number[] = [0, +1, +1, +1]
    let colOperators: number[] = [+1, 0, +1, -1]
    for (let i of Array(4).keys()) {
      let row: number = rowPositions[i]
      let col: number = colPositions[i]
      let rowOptr: number = rowOperators[i]
      let colOptr: number = colOperators[i]
      let count: number = 0
      let streakIndices: Coordinate[] = []
      for (let _ of Array(7)) {
        if (!this.isOutOfBound(row) && !this.isOutOfBound(col)) {
          if (this.gameState.tiles[row][col].player != tile.player) {
            count = 0
            if (streakIndices.length < this.FOUR)
              streakIndices = [] 
          } else {
            count += 1
            streakIndices.push({
              r: row,
              c: col
            })
          }
          if (count == this.FOUR) {
            hasWon = true
          }
        }
        row += rowOptr
        col += colOptr
      }
      if (streakIndices.length >= this.FOUR) {
        for (let streakIndex of streakIndices) {
          this.gameState.tiles[streakIndex.r][streakIndex.c].isPartOfWinStreak = true
        }
      }
    }
    return hasWon
  }

  onLearningMode(): void {
    this.gameState.learningMode = !this.gameState.learningMode
  }

  onMove(tile: Tile) {
    if (this.gameState.gameEnded) {
      return
    }
    if (tile.isValid) {
      // For retract
      this.gameState.preMoveTile = tile
      this.gameState.updatedIsValidTiles = []
      this.gameState.canRetract = true
      this.gameState.availableMoves -= 1
      tile.player = this.gameState.turn
      this.updateIsValid(tile)
      let hasWon: boolean = this.checkWinCondition(tile)
      if (hasWon) {
        console.log(tile.player + " won!")
        swal({
          title: "Congratulations!",
          text: this.PLAYER_NAME[this.gameState.turn - 1] + " won the game!",
        })
        this.gameState.gameEnded = true
        this.gameState.canRetract = false
      }
      this.gameState.turn = this.nextTurn(this.gameState.turn)

      // Check if the board is full
      if (this.gameState.availableMoves == 0) {
        this.gameState.gameEnded = true
        this.gameState.canRetract = false
        swal({
          title: "Draw!",
          icon: "info",
          buttons: {
            cancel: {
              text: "Close",
              value: null,
              visible: true,
              className: "",
              closeModal: true,
            },
            confirm: {
              text: "Start a new game!",
              value: true,
              visible: true,
              className: "",
              closeModal: true
            }
          }
        })
        .then((value) => {
          if (value)
            this.onNewGame()
        })
      }
    }
  }

  onRetract() {
    this.gameState.canRetract = false
    this.gameState.availableMoves += 1
    this.gameState.turn = this.preTurn(this.gameState.turn)
    for (let tile of this.gameState.updatedIsValidTiles) {
      tile.isValid = false
    }
    this.gameState.preMoveTile.isValid = true
    this.gameState.preMoveTile.player = 0
  }

  onNewGame() {
    if (this.gameState.gameEnded) {
      this.router.navigate(['/start'])
    }
    else {
      swal({
        title: "Are you sure to start a new game?",
        text: "You will not be able to recover the game progress!",
        icon: "warning",
        buttons: {
          cancel: {
            text: "Cancel",
            value: null,
            visible: true,
            className: "",
            closeModal: true,
          },
          confirm: {
            text: "Yes, start a new game!",
            value: true,
            visible: true,
            className: "",
            closeModal: true
          }
        }
      })
        .then((value) => {
          if (value) {
            this.router.navigate(['/start'])
          }
        })
    }
  }
}
