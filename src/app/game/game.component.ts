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
  learningMode: boolean = false

  constructor() { }

  static clone(arr) {
    let newArray = []
    arr.forEach((row, index) => {
      newArray.push(row.slice())
    })
    return newArray
  }

  setTileClasses(i, j) {
    let classes = {}
    classes['valid'] = this.isValid[i][j]
    let playerStr = 'player' + this.status[i][j]
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
    // Init game status
    this.status = Array.from(Array(this.size), () => Array(this.size).fill(0))
    this.preStatus = Array.from(Array(this.size), () => Array(this.size).fill(0))
    this.isValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    this.preIsValid = Array.from(Array(this.size), () => Array(this.size).fill(false))
    // Set the edges to be a valid move
    const EDGE_INDICES = [0, this.size - 1]
    console.log(EDGE_INDICES)
    for (let rowIndex of Array(this.size).keys()) {
      for (let colIndex of Array(this.size).keys()) {
        if (EDGE_INDICES.includes(rowIndex) ||
            EDGE_INDICES.includes(colIndex)) {
              this.isValid[rowIndex][colIndex] = true
            }
      }
    }
    console.log(this.isValid)

    const MARGIN = 2
    let screenWidth = document.getElementById("wrapper").offsetWidth
    this.tileWidth = Math.floor(screenWidth / this.size) - MARGIN * 2

    

  }

  nextTurn() {
    this.turn += 1
    if (this.turn > this.numOfPlayers)
      this.turn = 1
  }

  updateIsValid(row: number, col: number) {
    this.isValid[row][col] = false
    let end = this.size - 1
    let rowPositions = [0, end, row, row]
    let colPositions = [col, col, 0, end]
    let rowOperators = [+1, -1, 0, 0]
    let colOperators = [0, 0, +1, -1]
    for (let i of Array(4).keys()) {
      let row = rowPositions[i]
      let col = colPositions[i]
      let rowOptr = rowOperators[i]
      let colOptr = colOperators[i]
      for (let _ of Array(this.size)) {
        // console.log(row, col)
        if (this.status[row][col] == 0) {
          if (this.isValid[row][col] == true) {
            break
          } else {
            this.isValid[row][col] = true
            console.log(row, col)
            break
          }
        }
        row += rowOptr
        col += colOptr
      }
    }
  }

  onLearningMode() {
    this.learningMode = !this.learningMode
    console.log(this.learningMode)
  }

  onMove(row, col) {
    if (this.isValid[row][col]) {
      this.preStatus = GameComponent.clone(this.status)
      this.preIsValid = GameComponent.clone(this.isValid)
      this.nextTurn()
      this.status[row][col] = this.turn
      this.updateIsValid(row, col)
    }
  }
}
