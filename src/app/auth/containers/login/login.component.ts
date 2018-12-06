import { Component, OnInit, NgZone } from '@angular/core';
import { Login, ILogin } from '../../models/login';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private authService: AuthService, 
    private router: Router,
    private zone: NgZone) {

  }

  ngOnInit() {
  }

  submit() {
    console.log(this.loginForm.value);

    if(this.loginForm.value) {
      let login2 = new Login();
      login2.email = this.loginForm.value.email;
      login2.password =  this.loginForm.value.password;
      this.authService.loginWithEmail(login2)
      .then(user => {
        localStorage.setItem('bzgPokeAppTwo', JSON.stringify(user));
        this.router.navigate(['main']);
      });
    }
  }

  signWithGoogle(event) {
    if (event) {
      this.authService.loginWithGoogle()
      .then(user => {
        localStorage.setItem('bzgPokeAppTwo', JSON.stringify(user));
        this.zone.run(
          _ => {
            this.router.navigate(['main']);
          }
        );
      });

    }
  }

}
