import { Component, OnInit } from '@angular/core';
import { CollectionsService } from "../../services/collections.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collectionList: Observable<any[]>;

  constructor(private authFire: AngularFireAuth, private collectionService: CollectionsService ) { }

  ngOnInit() {
    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.collectionList = this.collectionService.getListCollection().snapshotChanges().pipe(
            map(changes => 
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
        }
      }
    );
  }

  create(collection : any){
    this.collectionService.createCollection(collection);
    console.log("collection" + collection["name"]);
  }

  deleteCollection(key :any){
    console.log("key "+key);
    this.collectionService.deleteCollection(key);
  }

}
