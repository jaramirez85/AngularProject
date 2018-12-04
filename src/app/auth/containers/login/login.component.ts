import { Component, OnInit } from '@angular/core';
import { Login, ILogin } from '../../models/login';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login: ILogin;
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder) {
    //this.login = new Login();
  }

  ngOnInit() {
  }

  submit() {
    //console.log(this.login);
    console.log(this.loginForm.value);
  }

}
