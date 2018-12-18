import { Component, OnInit } from '@angular/core';
import { CollectionsService } from "../../services/collections.service";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  constructor(private collectionService: CollectionsService ) { }

  ngOnInit() {
  }

  create(collection : any){
    this.collectionService.createCollection(collection);
    console.log("collection" + collection["name"]);
  }

}
