import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tile } from '../tile';

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
  size: number = 10
  numOfPlayers: number = 4
  // Game Status
  gameEnded: boolean = false
  canRetract: boolean = false
  turn: number = 1
  // preTurn: number
  // status: number[][]
  // preStatus: number[][]
  // isValid: boolean[][]
  // preIsValid: boolean[][]
  // tileWidth: number
  learningMode: boolean = false
  tiles: Tile[][] = []
  PLAYER_NAME: string[] = ["Red", "Blue", "Yellow", "Green", "Pink", "Purple"]
  FOUR: number = 4

  constructor(private router: Router) { }

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

  ngOnInit() {
    // Get size and numOfPlayers from StarterComponent
    let data = history.state.data
    if (data) {
      if ('size' in data) {
        this.size = data['size']
      }
      if ('numOfPlayers' in data) {
        this.numOfPlayers = data['numOfPlayers']
      }
    }

    const MARGIN = 2
    let screenWidth = document.getElementById("wrapper").offsetWidth
    let tileLength = Math.floor(screenWidth / this.size) - MARGIN * 2
    const EDGE_INDICES = [0, this.size - 1]
    for (let i of Array(this.size).keys()) {
      let row = []
      for (let j of Array(this.size).keys()) {
        let tile: Tile = {
          r: i,
          c: j,
          player: 0,
          isValid: EDGE_INDICES.includes(i) || EDGE_INDICES.includes(j),
          isPartOfWinStreak: false,
          length: tileLength
        }
        row.push(tile)
      }
      this.tiles.push(row)
    }
    console.log(this.tiles)
    // // Init game status
    // this.status = Array.from(Array(this.size), () => Array(this.size).fill(0))
    // this.preStatus = Array.from(Array(this.size), () => Array(this.size).fill(0))
    // this.isValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    // this.preIsValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    // // Set the edges to be a valid move
    // console.log(EDGE_INDICES)
    // for (let rowIndex of Array(this.size).keys()) {
    //   for (let colIndex of Array(this.size).keys()) {
    //     if (EDGE_INDICES.includes(rowIndex) ||
    //         EDGE_INDICES.includes(colIndex)) {
    //           this.isValid[rowIndex][colIndex] = true
    //         }
    //   }
    // }
    // console.log(this.isValid)


    

  }

  turnPlusOne(turn: number) {
    turn += 1
    if (turn > this.numOfPlayers)
      turn = 1
    return turn
  }

  isOutOfBound(n: number) {
    return (n < 0) || (n >= this.size)
  }

  updateIsValid(tile: Tile) {
    tile.isValid = false
    let end: number = this.size - 1
    let rowPositions: number[] = [0, end, tile.r, tile.r]
    let colPositions: number[] = [tile.c, tile.c, 0, end]
    let rowOperators: number[] = [+1, -1, 0, 0]
    let colOperators: number[] = [0, 0, +1, -1]
    for (let i of Array(4).keys()) {
      let row: number = rowPositions[i]
      let col: number = colPositions[i]
      let rowOptr: number = rowOperators[i]
      let colOptr: number = colOperators[i]
      for (let _ of Array(this.size)) {
        // console.log(row, col)
        if (this.tiles[row][col].player == 0) {
          if (this.tiles[row][col].isValid == true) {
            break
          } else {
            this.tiles[row][col].isValid = true
            console.log(row, col)
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
          if (this.tiles[row][col].player != tile.player) {
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
          this.tiles[streakIndex.r][streakIndex.c].isPartOfWinStreak = true
        }
      }
    }
    return hasWon
  }

  onLearningMode() {
    this.learningMode = !this.learningMode
    console.log(this.learningMode)
  }

  onMove(tile: Tile) {
    if (this.gameEnded) {
      return
    }
    if (tile.isValid) {
      // this.preStatus = GameComponent.clone(this.status)
      // this.preIsValid = GameComponent.clone(this.isValid)
      tile.player = this.turn
      this.updateIsValid(tile)
      let hasWon: boolean = this.checkWinCondition(tile)
      if (hasWon) {
        console.log(tile.player + " won!")
        swal({
          title: "Congratulations!",
          text: this.PLAYER_NAME[this.turn - 1] + " won the game!",
        })
        this.gameEnded = true
      }
      this.turn = this.turnPlusOne(this.turn)
    }
  }

  onNewGame() {
    if (this.gameEnded) {
      this.router.navigate(['/starter'])
    }
    else {
      swal({
        title: "Are you sure to start a new game?",
        text: "You will not be able to recover the game progress!",
        icon: "info",
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
            this.router.navigate(['/starter'])
          }
        })
    }
  }
}
