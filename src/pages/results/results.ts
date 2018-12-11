import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsComponent {
  public winner;
  public response;
  public appleWins: boolean;

  constructor(public navCtrl:NavController,navParams:NavParams) {
    this.winner = navParams.get('win');
    this.response = navParams.get('respond');
    this.appleWins = navParams.get('aw');
  }

  onBackButton() {
    this.navCtrl.pop();
  }

}
