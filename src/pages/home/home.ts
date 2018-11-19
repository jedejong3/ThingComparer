import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";
import {thingManager} from "../../backend/thingManager";
import {Utilities} from "../../backend/utilities";
import {AboutPage} from "../about/about";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ThingOneName;
  public ThingOne;

  public ThingTwoName;
  public ThingTwo;

  private decider;
  private manager;


  constructor(public navCtrl: NavController) {
    this.decider = new Decider();
    this.manager = new thingManager();
  }

  aboutPage() {
    this.navCtrl.push(AboutPage);
  }
  async compareClick() {

    // If the inputs are empty or undefined, fill them
    if (this.ThingOneName == null || typeof this.ThingOneName == "undefined" || /^\s*$/.test(this.ThingOneName)) {
      this.ThingOne = "an empty void";
    }
    if (this.ThingTwoName == null || typeof this.ThingTwoName == "undefined" || /^\s*$/.test(this.ThingTwoName)) {
      this.ThingTwoName = "absolutely nothing";
    }

    // sanitize
    this.ThingOneName = Utilities.sanitize(this.ThingOneName);
    this.ThingTwoName = Utilities.sanitize(this.ThingTwoName);

    // add objects to list of previous objects, or update count if exists
    this.ThingOne = this.manager.inThings(this.ThingOneName);
    this.ThingTwo = this.manager.inThings(this.ThingTwoName);

    // manageThings() handles creating the Thing objects if needed,
    // which is asynchronous because it involves calling datamuse API.
    var context = this;
    this.manageThings(this).then( function() {
      // create and give response
      let response = context.decider.choseComparer(context.ThingOne, context.ThingTwo);
      var applewins = context.ThingOne.qualIndex>context.ThingTwo.qualIndex;
      var winner = applewins ? context.ThingOne : context.ThingTwo;
      console.log('winner', winner);

      // TODO change this, it's kind of a hack to test the datamuse api
      if (winner.datamuseResponse.length > 0) {
        response = 'I like ' + winner.datamuseResponse[0].word + response;
      }

      context.navCtrl.push(ResultsComponent, {respond: response, aw: applewins,
        win:applewins ? context.ThingOne : context.ThingTwo});
      context.ThingOne="";
      context.ThingTwo="";
    }).catch( function(err) {
      console.error(err);
    });


  }

  async manageThings(context) {
    if(context.ThingOne === null){
      context.ThingOne = await new Thing(context.ThingOneName);
      context.manager.add(context.ThingOne);
    }
    context.ThingOne.iterateCount();

    if(context.ThingTwo === null){
      context.ThingTwo = await new Thing(context.ThingTwoName);
      context.manager.add(context.ThingTwo);
    }
    context.ThingTwo.iterateCount();
  }

}
