import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { IMessage } from 'src/app/alerts/models/interfaces/message';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.css']
})
export class TopSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor(private msgService: MessagesService) { }

  ngOnInit() {
  }

  searchBooks(data: string) {
    //this.search.emit(data);
    let msg: IMessage;
    msg = {msg: data, type: 'searchBook'};
    this.msgService.message(msg);
  }

}
