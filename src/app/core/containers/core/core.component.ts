import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  dataBook: string;
  asideState: string;

  constructor() { }

  ngOnInit() {
  }

  searchBook(data: string){
    this.dataBook = data;
  }

  changeSideState(data: string){
    this.asideState = data;
  }

}
