import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";
import {thingManager} from "../../backend/thingManager";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ThingOne;

  public ThingTwo;

  private decider;
  private manager;


  constructor(public navCtrl: NavController) {
    this.decider = new Decider();
    this.manager = new thingManager();
  }


  compareClick() {
    let response: String;

    // If the inputs are empty or undefined, fill them
    if (this.ThingOne == null || typeof this.ThingOne == "undefined" || /^\s*$/.test(this.ThingOne)) {
      this.ThingOne = "an empty void";
    }
    if (this.ThingTwo == null || typeof this.ThingTwo == "undefined" || /^\s*$/.test(this.ThingTwo)) {
      this.ThingTwo = "absolutely nothing";
    }

    let thing1Object=this.manager.inThings(this.ThingOne);
    if(thing1Object===null){
      thing1Object = new Thing(this.ThingOne);
      this.manager.add(thing1Object);
      console.log("new thing!");
    }
    let thing2Object=this.manager.inThings(this.ThingTwo);
    if(thing2Object===null){
      thing2Object = new Thing(this.ThingTwo);
      this.manager.add(thing2Object);
    }

    response = this.decider.choseComparer(thing1Object,thing2Object);

    this.navCtrl.push(ResultsComponent, {respond: response});
    this.ThingOne="";
    this.ThingTwo="";
  }


}

