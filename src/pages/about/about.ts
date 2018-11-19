import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {BackStory} from "../backstory/backstory";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  backButton() {
    this.navCtrl.pop();
  }

  BS() {
    this.navCtrl.pop();
    this.navCtrl.push(BackStory);

  }
}
