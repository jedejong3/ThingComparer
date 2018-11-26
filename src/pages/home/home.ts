import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";
import {Thing} from "../../backend/thing";
import {Decider} from "../../backend/decider";
import {thingManager} from "../../backend/thingManager";
import {Utilities} from "../../backend/utilities";
import {Code, Datamuse} from "../../backend/datamuse";
import {AboutPage} from "../about/about";
import{SplashScreen} from "@ionic-native/splash-screen";
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

    // sanitize
    this.ThingOneName = Utilities.sanitize(this.ThingOneName);
    this.ThingTwoName = Utilities.sanitize(this.ThingTwoName);

    // add objects to list of previous objects, or update count if exists
    this.ThingOne = this.manager.inThings(this.ThingOneName);
    this.ThingTwo = this.manager.inThings(this.ThingTwoName);

    var datamuse = new Datamuse();
    if(this.ThingOne === null){
      this.ThingOne = new Thing(this.ThingOneName);
      this.ThingOne.datamuseRelated = await datamuse.request(this.ThingOne.name, null, null);
      this.ThingOne.datamuseModified =await datamuse.requestWithOptions(null, null, null,
        null, null, this.ThingOne.name,null,null,true,null);
      this.manager.add(this.ThingOne);
    }
    this.ThingOne.iterateCount();

    if(this.ThingTwo === null){
      this.ThingTwo = new Thing(this.ThingTwoName);
      this.ThingTwo.datamuseRelated = await datamuse.request(this.ThingTwo.name, null, null);
      this.ThingTwo.datamuseModified =await datamuse.requestWithOptions(null, null, null,
        null, null, this.ThingTwo.name,null,null,true,null);
      this.manager.add(this.ThingTwo);
    }
    this.ThingTwo.iterateCount();

    // create and give response
    let response = this.decider.chooseComparer(this.ThingOne, this.ThingTwo);
    var applewins = this.ThingOne.qualIndex>this.ThingTwo.qualIndex;
    var winner = applewins ? this.ThingOne : this.ThingTwo;
    console.log('winner', winner);

    // TODO change this, it's kind of a hack to test the datamuse api
    if (winner.datamuseModified.length > 0) {
      for(var i =0; i<winner.datamuseModified.length; i++){
        if((winner.datamuseModified[i].tags=="n")){
          response = 'I like ' + winner.name +" "+winner.datamuseModified[i].word+'. ' + response;
          break;
        }
      }
    
    }

    this.navCtrl.push(ResultsComponent, {respond: response, aw: applewins,
      win:applewins ? this.ThingOne : this.ThingTwo,
      loss: applewins ? this.ThingTwo : this.ThingOne
    });

    // reset Thing text and reenable button
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
