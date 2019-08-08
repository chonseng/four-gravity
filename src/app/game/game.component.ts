import { Component, OnInit } from '@angular/core';

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
  preTurn: number
  status: number[][]
  preStatus: number[][]
  isValid: boolean[][]
  preIsValid: boolean[][]
  tileWidth: number

  constructor() { }

  newGame() {
    
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
    // Init game status
    this.status = Array.from(Array(this.size), () => Array(this.size).fill(0))
    this.preStatus = Array.from(Array(this.size), () => Array(this.size).fill(0))
    this.isValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    this.preIsValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    // Set the edges to be a valid move
    const EDGE_INDICES = [0, this.size - 1]
    for (let rowIndex in this.isValid) {
      for (let colIndex in this.isValid[rowIndex]) {
        if (rowIndex in EDGE_INDICES ||
            colIndex in EDGE_INDICES) {
              this.isValid[rowIndex][colIndex] = true
            }
      }
    }

    const MARGIN = 2
    let screenWidth = document.getElementById("wrapper").offsetWidth
    this.tileWidth = Math.floor(screenWidth / this.size) - MARGIN * 2

    console.log(this.tileWidth)

  }

}
