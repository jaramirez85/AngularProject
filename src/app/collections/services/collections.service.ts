import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
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
  url: string = environment.apiUrl;


  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private alertService: MessagesService) { 
    authFire.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.collectRef = rdb.list(`collections/${this.user.uid}`);
      }
    });

  }

  listCollections(user: firebase.User): Observable<any[]> {
    this.collectRef = this.rdb.list(`collections/${user.uid}`);
    return this.collectRef.valueChanges();
  }

  createCollection(collection : any){
    const promise = this.collectRef.push(collection);
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
