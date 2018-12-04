import { Component, OnInit } from '@angular/core';
import { Login, ILogin } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: ILogin;

  constructor() {
    this.login = new Login();
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.login);
  }

}
