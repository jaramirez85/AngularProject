import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-aside-left',
  templateUrl: './header-aside-left.component.html',
  styleUrls: ['./header-aside-left.component.css']
})
export class HeaderAsideLeftComponent implements OnInit {

  public today : number 	= Date.now();
  @Input() user: {name: string, photoUrl: string, email: string};
  
  constructor() { }

  ngOnInit() {
  }

}
