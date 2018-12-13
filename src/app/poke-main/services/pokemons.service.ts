import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subject } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from "firebase/app";
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { IPokeList } from '../models/interfaces/poke-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private subjectSearch = new Subject<string>();
  favsRef: AngularFireList<any>;
  user: firebase.User;
  url: string = environment.apiUrl;

  constructor(private http: HttpClient,
    private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase,
    private alertService: MessagesService) {

      authFire.authState.subscribe(user => {
        if (user) {
          this.user = user;
          this.favsRef = rdb.list(`favorites/${this.user.uid}`);
        }
      });

  }

  searchPokemons(name: string) {
    this.subjectSearch.next(name);
  }
  getSearchPokemons(): Observable<string> {
    return this.subjectSearch.asObservable();
  }

  list(): Observable<IPokeList> {
    const url = `${this.url}pokemon/`;
    return this.http.get<IPokeList>(url)
    .pipe(
      catchError(this.handleError('Get Pokemons List', null))
    );
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError('Get Pokemon', null))
    );
  }

  getPokemonByName(name: string): Observable<any> {
    const url = `${this.url}pokemon/${name}/`;
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError(`Get Pokemon by Name (${name})`, null))
    );
  }

  addFavorite(poke: any) {
    const promise = this.favsRef.push(poke);
    promise.then(_ => {
      this.alertService.message({msg: 'Pokemon Agregado a Favoritos', type: 'success'});
    });
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado: ${error.message}`);
      return of(results as T);

    }
  }

  private messages(msg: string) {
    const type = 'error';
    this.alertService.message({ msg: msg, type: type });
  }


}
