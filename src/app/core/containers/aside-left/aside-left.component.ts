import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {

  @Input() asideState: string;

  @Input() user: {name: string, photoUrl: string};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = {
      name: '',
      photoUrl: ''
    };
    this.authService.profileUser().subscribe(u => {
      if (u.photoURL) {
        this.user.name = u.displayName;
        this.user.photoUrl = u.photoURL;
      } else {
        this.user.name = u.email;
        this.user.photoUrl = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
      }
    });
  }

}
