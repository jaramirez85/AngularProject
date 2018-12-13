import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  _id:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
         this._id=params.id;
      }
    );
  }

}
