import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css'],
  animations: [
    trigger('asideAnimation',[
      state('close', style({
          width:'50px'
      })),
      state('open',style({
        width: '300px'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class AsideLeftComponent implements OnInit {
  _stateClick:string;

  user: {
    name:string, email:string,photoUrl:string
  };

  @Input()
  get stateClick():string{
    return this._stateClick;
 };
 set stateClick (data :string){
  this._stateClick =data;
};

  constructor() { }

  ngOnInit() {
    this.user ={
      name: "Usuario Prueba",
      email: "jaramirez85@gmail.com",
      photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  }

}
