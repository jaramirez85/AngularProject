import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {

  user: {name: string, photoUrl: string, email: string};

  constructor() { }

  @Input() asideState: string;

  ngOnInit() {
    this.user = {
      name: 'Usuario Prueba',
      photoUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      email: 'jaramirez85@gmail.com'
    }
  }
}