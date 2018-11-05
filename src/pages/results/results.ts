import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {NavParams} from "ionic-angular";

/**
 * Generated class for the ResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsComponent {
  public winner;
  public loser;
  public response;
  public appleWins: boolean;

  constructor(public navCtrl:NavController,navParams:NavParams) {
    this.winner = navParams.get('win');
    this.loser = navParams.get('loss');
    this.response = navParams.get('respond');
    this.appleWins = Math.random() < 0.5;
  }

  onBackButton() {
    this.navCtrl.pop();
  }

}
