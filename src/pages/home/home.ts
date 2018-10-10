import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {RandomComparer} from "../../backend/comparers/random_comparer";
import {Thing} from "../../backend/thing";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ThingOne;

  public ThingTwo;


  constructor(public navCtrl: NavController) {

  }


  compareClick() {
    let response:String;

    if (typeof this.ThingOne == "undefined") {
      this.ThingOne = "an empty void";
    }
    if (typeof this.ThingTwo == "undefined") {
      this.ThingTwo = "absolutely nothing";
    }

    let randomComparer = new RandomComparer();
    response = randomComparer.compare(new Thing(this.ThingOne),new Thing(this.ThingTwo))

    this.navCtrl.push(ResultsComponent,{respond:response})
  }



}

