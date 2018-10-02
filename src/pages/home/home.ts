import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";


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
    if (typeof this.ThingOne == "undefined") {
      this.ThingOne = "an empty void";
    }
    if (typeof this.ThingTwo == "undefined") {
      this.ThingTwo = "absolutely nothing";
    }
    if (Math.random() <= 0.5) {
      console.log("Obviously " + this.ThingOne.toString().toLowerCase() + " is better than " +
        this.ThingTwo.toString().toLowerCase() + ", everyone knows that.")
    } else {
      console.log("Obviously " + this.ThingTwo.toString().toLowerCase() + " is better than " +
        this.ThingOne.toString().toLowerCase() + ", everyone knows that.")
    }
    this.navCtrl.push(ResultsComponent,{thing1:this.ThingOne,thing2:this.ThingTwo})
  }
}
