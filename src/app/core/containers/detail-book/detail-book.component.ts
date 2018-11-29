import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/router";
import {books} from "../../../books";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  id:string;
  constructor(private route: ActivatedRoute) { }
   book :any;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=> {
      this.id = params.id;
    });
    this.book = books.items.find(
      item =>{
        return item.id === this.id;
      }
    );
  }
}
