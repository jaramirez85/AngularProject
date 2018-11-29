import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu-header',
  templateUrl: './main-menu-header.component.html',
  styleUrls: ['./main-menu-header.component.css']
})
export class MainMenuHeaderComponent implements OnInit {
 @Input() user:{name:string, email:string, photoUrl:string};
  constructor() { }

  ngOnInit() {
  }

}
