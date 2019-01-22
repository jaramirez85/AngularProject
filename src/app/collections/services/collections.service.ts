import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  collectRef: AngularFireList<any>;
  collects: Observable<any[]>;
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

  getListCollection():AngularFireList<any>{
    return this.collectRef;
  }

  listCollections(user: firebase.User): Observable<any[]> {
    this.collectRef = this.rdb.list(`collections/${user.uid}`);
    return this.collectRef.valueChanges();
  }

  createCollection(collection : any){
    const promise = this.collectRef.push(collection);
    promise.then(_ => {
      this.alertService.message({msg: 'new collection created', type: 'success'});
    });
  }

  public deleteCollection(key: any){
    const promise = this.rdb.list(`collections/${this.user.uid}/${key}`).remove();
    promise.then(_ => {
      this.alertService.message({msg: 'The collection has been removed', type: 'success'});
    });
  }

  
  public removePokemonOfCollection(user: firebase.User, key: any, keyPokemon : any){
    const promise = this.rdb.list(`collections/${this.user.uid}/${key}/pokemons/${keyPokemon}`).remove();
    promise.then(_ => {
      this.alertService.message({msg: 'The pokemon was removed of the collection', type: 'success'});
    });
  }

  addToCollection(poke: any, collectionItem : any) {
    const promise = this.rdb.list(`collections/${this.user.uid}/${collectionItem.key}/pokemons`).push(poke);
    promise.then(_ => {
      this.alertService.message({msg: `Pokemon ${poke.name} has been added to ${collectionItem.name}`, type: 'success'});
    });
  }
  getPokemonsByCollection(user:firebase.User, key : any):AngularFireList<any>{
    return this.rdb.list(`collections/${user.uid}/${key}/pokemons`);
  }


}
