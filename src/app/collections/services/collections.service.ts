import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'src/app/alerts/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private alertService: MessagesService) { 

  }

  listCollections(user: firebase.User): Observable<any[]> {
    this.collectRef = this.rdb.list(`collections/${user.uid}`);
    return this.collectRef.valueChanges();
  }

  addCollection(poke: any) {
    const collect = {
      name: 'testCollect',
      description: 'testDescription',
      pokemons: []
    };
    collect.pokemons.push(poke);

    const promise = this.collectRef.push(collect);
    promise.then(_ => {
      this.alertService.message({msg: 'Pokemon Agregado a Collection', type: 'success'});
    });
  }
}
