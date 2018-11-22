import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { books } from '../../../books';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  book: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.params.subscribe((params: Params) => {
      id = params.id;
    });

    this.book = books.items.find(
      item => {
        return item.id === id;
      }
    );

  }

}
