import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";
import {thingManager} from "../../backend/thingManager";
import {Utilities} from "../../backend/utilities";
import {Datamuse, Code} from "../../backend/datamuse";
import {AboutPage} from "../about/about";


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

  aboutPage() {
    this.navCtrl.push(AboutPage);
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

    // sanitize
    this.ThingOne = Utilities.sanitize(this.ThingOne);
    this.ThingTwo = Utilities.sanitize(this.ThingTwo);

    // add objects to list of previous objects, or update count if exists
    let thing1Object=this.manager.inThings(this.ThingOne);

    if(thing1Object===null){
      thing1Object = new Thing(this.ThingOne);
      this.manager.add(thing1Object);
    }
    thing1Object.iterateCount();

    let thing2Object=this.manager.inThings(this.ThingTwo);

    if(thing2Object===null){
      thing2Object = new Thing(this.ThingTwo);
      this.manager.add(thing2Object);
    }
    thing2Object.iterateCount();
    this.manager.printall();

    // create and give response
    response = this.decider.choseComparer(thing1Object,thing2Object);
    var applewins=thing1Object.qualIndex>thing2Object.qualIndex;

    // TODO these lines are only for testing the datamuse class
    var datamuse = new Datamuse();
    datamuse.request(applewins ? thing1Object.name : thing2Object.name, null, null);
    datamuse.requestWithOptions(applewins ? thing1Object.name : thing2Object.name,
                                Code.RelatedCode.AlmostRhymes, 'soon',
                                Code.VocabCode.EnglishWikipedia,
                                ['noodle', 'paper'],
                                'friendly',
                                'going',
                                20,
                                true,
                                true);

    this.navCtrl.push(ResultsComponent, {respond: response, aw: applewins,
      win:applewins ? this.ThingOne:this.ThingTwo});
    this.ThingOne="";
    this.ThingTwo="";
  }



}
