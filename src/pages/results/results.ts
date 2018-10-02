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
  selector: 'results',
  templateUrl: 'results.html'
})
export class ResultsComponent {
  public winner;
  public loser;
  constructor(navCtrl:NavController,navParams:NavParams) {
    this.winner = navParams.get('win');
    this.loser = navParams.get('loss');
  }

}
