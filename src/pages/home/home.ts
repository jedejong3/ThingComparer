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
    var winner:String;
    var loser:String;

    if (typeof this.ThingOne == "undefined") {
      this.ThingOne = "an empty void";
    }
    if (typeof this.ThingTwo == "undefined") {
      this.ThingTwo = "absolutely nothing";
    }
    if (Math.random()<=0.5) {
      winner = this.ThingOne;
      loser = this.ThingTwo;
    } else {
      winner = this.ThingTwo;
      loser = this.ThingOne;
    }

    if (Math.random() <= 0.5) {
      console.log("Obviously " + winner.toString().toLowerCase() + " is better than " +
        loser.toString().toLowerCase() + ", everyone knows that.")
    }

    this.navCtrl.push(ResultsComponent,{win:winner,loss:loser})
  }
}
