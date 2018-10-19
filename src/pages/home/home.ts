import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ThingOne;

  public ThingTwo;

  private decider;


  constructor(public navCtrl: NavController) {
    this.decider = new Decider();
  }


  compareClick() {
    let response: String;

    // If the inputs are empty or undefined, fill them
    if (typeof this.ThingOne == "undefined" || /^\s*$/.test(this.ThingOne)) {
      this.ThingOne = "an empty void";
    }
    if (typeof this.ThingTwo == "undefined" || /^\s*$/.test(this.ThingTwo)) {
      this.ThingTwo = "absolutely nothing";
    }

    let thing1Object = new Thing(this.ThingOne);
    let thing2Object = new Thing(this.ThingTwo);

    response = this.decider.choseComparer(thing1Object,thing2Object);

    this.navCtrl.push(ResultsComponent, {respond: response});
    this.ThingOne="";
    this.ThingTwo="";
  }


}

