import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})

export class StarterComponent implements OnInit {
  sizeOptions: number[] = [...Array(8).keys()].map(x => x+=8)
  numOfPlayersOptions: number[] = [...Array(5).keys()].map(x => x += 2)
  size: number = 10
  numOfPlayers: number = 4

  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  onChooseSize(size: number) {
    this.size = size
  }

  onChooseNumOfPlayers(numOfPlayers: number) {
    this.numOfPlayers = numOfPlayers
  }

  newGame() {
    this.router.navigate(['/game'], { state: { data: {
      'size': this.size,
      'numOfPlayers': this.numOfPlayers
    } } })
  }

  onNewGame() {
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
        // new game new gameStatus
        localStorage["gameStatus"] = ""
        this.newGame()
      }
    })
  }
}
