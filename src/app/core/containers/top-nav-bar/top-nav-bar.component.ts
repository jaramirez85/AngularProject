import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store, select} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import {Observable} from 'rxjs';
import { User } from 'firebase';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchTop = new EventEmitter<string>();
  @Output() stateAside = new EventEmitter<string>();

  _state: string = 'open';
  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));
  user: User;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) {
    this.stateAside$.subscribe(
      aside => {
        this._state = aside;
      }
    );
    this.authService.profileUser()
    .subscribe(
      user => {
        this.user = user;
      }
    );
  }

  search(data: string) {
    this.searchTop.emit(data);
  }

  close(){
    if(this._state == 'open'){
      this.store.dispatch(new layout.CloseSideNav());
    }else {
      this.store.dispatch(new layout.OpenSideNav());
    }
  }

}
