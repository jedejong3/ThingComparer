import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";
import {thingManager} from "../../backend/thingManager";
import {Utilities} from "../../backend/utilities";
import {Code, Datamuse} from "../../backend/datamuse";
import {AboutPage} from "../about/about";
import {SplashScreen} from "@ionic-native/splash-screen";
import {BackStory} from "../backstory/backstory";


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

  private alreadyClicked = false;


  constructor(public navCtrl: NavController) {
    this.decider = new Decider();
    this.manager = new thingManager();
    this.navCtrl.push(BackStory);
  }

  aboutPage() {
    this.navCtrl.push(AboutPage);
  }

  async compareClick() {

    // disable button while processing current click so user can't double compareClick
    this.alreadyClicked = true;

    // make sure the name is properly formatted
    this.ThingOneName = Utilities.sanitize(this.ThingOneName);
    this.ThingTwoName = Utilities.sanitize(this.ThingTwoName);

    // check to see if there already exists a Thing object of the same name, and if so, set the ThingOne or ThingTwo to that object
    this.ThingOne = this.manager.inThings(this.ThingOneName);
    this.ThingTwo = this.manager.inThings(this.ThingTwoName);

    //connect to the datamuse API
    var datamuse = new Datamuse();

    //If no already existing object was found, create and populate the Thing object with information from datamuse
    if (this.ThingOne === null) {
      this.ThingOne = new Thing(this.ThingOneName);
      this.ThingOne.datamuseRelated = await datamuse.request(this.ThingOne.name, null, null);
      this.ThingOne.datamuseLeftContext = await datamuse.requestWithOptions(null, null, null,
        null, null, this.ThingOne.name, null, 30, true, null);
      this.ThingOne.datamuseModifies = await datamuse.requestWithOptions(null, null, null,
        null, null, null, this.ThingOne.name, 30, true, null);
      this.ThingOne.datamuseKindOf = await datamuse.request(null, 'spc', this.ThingOne.name);
      this.ThingOne.datamuseStats = await datamuse.request(null, 'trg', this.ThingOne.name);


      this.manager.add(this.ThingOne);
    }
    //note how many times this Thing has been compared
    this.ThingOne.iterateCount();

    if (this.ThingTwo === null) {
      this.ThingTwo = new Thing(this.ThingTwoName);
      this.ThingTwo.datamuseRelated = await datamuse.request(this.ThingTwo.name, null, null);
      this.ThingTwo.datamuseLeftContext = await datamuse.requestWithOptions(null, null, null,
        null, null, this.ThingTwo.name, null, 30, true, null);
      this.ThingTwo.datamuseModifies = await datamuse.requestWithOptions(null, null, null,
        null, null, null, this.ThingTwo.name, 30, true, null);
      this.ThingTwo.datamuseKindOf = await datamuse.request(null, 'spc', this.ThingTwo.name);
      this.ThingTwo.datamuseStats = await datamuse.request(null, 'trg', this.ThingTwo.name);

      this.manager.add(this.ThingTwo);
    }
    this.ThingTwo.iterateCount();


    // create and give response through a call to comparer
    let response = this.decider.chooseComparer(this.ThingOne, this.ThingTwo);
    //note the winner for the sake of graphics display
    var applewins = this.ThingOne.qualIndex > this.ThingTwo.qualIndex;

    // pushes the results screen and passes it parameters for the response, winner, and if the graphics should display an apple
    this.navCtrl.push(ResultsComponent, {
      respond: response, aw: applewins,
      win: applewins ? this.ThingOne : this.ThingTwo
    });

    // reset Thing text and re-enable button
    this.ThingOneName = "";
    this.ThingTwoName = "";
    this.alreadyClicked = false;
  }

  buttonDisabled(): boolean {
    if (typeof this.ThingOneName == "undefined"
      || typeof this.ThingTwoName == "undefined"
      || this.alreadyClicked) {
      return true;
    } else if (this.ThingTwoName.length == 0 || this.ThingOneName.length == 0) {
      return true;
    }
    return false;
  }

}
