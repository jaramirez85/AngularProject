import { Component, OnInit, Input } from '@angular/core';
import { books } from '../../../books';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '50px'
      })),
      state('open', style({
        width: '100%'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class MainContentComponent implements OnInit {

  _dataBook: string;

  @Input()
  get dataBook(): string {
    return this._dataBook;
  }

  set dataBook(data : string) {
    this._dataBook = data;
    this.search(data);
  }

  books: any[] = [];

  constructor() { }

  ngOnInit() {
    this.books = books.items;
  }

  search(query: string) {
    if (query && query.length > 0) {
      let book = this.books.find(
        item => {
          return item.volumeInfo.title === query;
        }
      );
      this.books = [];
      if(book)
        this.books.push(book);
    }
  }

}
