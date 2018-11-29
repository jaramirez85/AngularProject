import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  stateHamburguer:string = 'open';

  @Output() searchTop= new EventEmitter<string>();
  @Output() asideState= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  search(data :string){
    this.searchTop.emit(data);
  }

  asideStateChange(){
    this.stateHamburguer= this.stateHamburguer == 'open'?'close':'open';
    this.asideState.emit(this.stateHamburguer);
  }

}
