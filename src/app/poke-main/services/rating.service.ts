import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private rdb: AngularFireDatabase) { }

  getRatingList(id:string):Observable<any[]>{
    console.log("Id a consultar "+id)
    let ratingsRef=this.rdb.list(`ratings/${id}`);
    return ratingsRef.valueChanges();
  }

  setRating(id:string,value:number){
    console.log("EL ID"+id+" EL VAL: "+value)
    let ratingsRef=this.rdb.list(`ratings/${id}`);
    ratingsRef.push(value);
  }
}
