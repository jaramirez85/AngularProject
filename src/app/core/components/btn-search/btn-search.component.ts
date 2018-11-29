import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-btn-search',
  templateUrl: './btn-search.component.html',
  styleUrls: ['./btn-search.component.css']
})
export class BtnSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();///evento que va disparar un string

  constructor() { }

  ngOnInit() {
  }

  searchBooks (data :string){
    this.search.emit(data);
  }

}
