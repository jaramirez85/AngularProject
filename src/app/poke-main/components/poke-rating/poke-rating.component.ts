import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from "../../services/rating.service";
import { BehaviorSubject } from 'rxjs';
import {FormControl, Validators,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-poke-rating',
  templateUrl: './poke-rating.component.html',
  styleUrls: ['./poke-rating.component.css'],
  providers: [NgbRatingConfig]
})
export class PokeRatingComponent implements OnInit {

  @Input()pokemonId:string;
  totalVotes:number=0;
  rate:number;
  myForm:FormGroup;
  averageRate:number;
  
  constructor(config: NgbRatingConfig,private service:RatingService) {
    config.max = 5;
  }
  ngOnInit() {
    this.myForm=new FormGroup({
      rating:new FormControl()
    });
    let accum:number=0;
    this.service.getRatingList(this.pokemonId).subscribe(
      (list)=>{
        accum=0;
        this.totalVotes=list.length;
        list.forEach(
          (vote)=>{
            accum+=vote;
          }
        );
        this.averageRate=accum/this.totalVotes;
        console.log("ACCUM: "+accum+" AV: "+this.averageRate)

        
      }
    );

   
  }

  setRating(){
    //console.log(this.myForm.controls.rating.value)
    this.service.setRating(this.pokemonId,this.myForm.controls.rating.value)
  }

}
