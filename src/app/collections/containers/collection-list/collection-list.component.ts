import { Component, OnInit } from '@angular/core';
import { CollectionsService } from "../../services/collections.service";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collectionList: any[] = [];

  constructor(private authFire: AngularFireAuth, private collectionService: CollectionsService ) { }

  ngOnInit() {
    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.collectionService.listCollections(user)
            .subscribe(
              list => {
                this.collectionList = list;
              }
            );
        }
      }
    );
  }

  create(collection : any){
    this.collectionService.createCollection(collection);
    console.log("collection" + collection["name"]);
  }

}
