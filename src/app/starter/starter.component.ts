import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  onNewGame() {
    this.router.navigate(['/game'], { state: { data: {
      'size': this.size,
      'numOfPlayers': this.numOfPlayers
    } } })
  }
}
