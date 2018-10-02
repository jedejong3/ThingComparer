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
  public ThingOne;
  public ThingTwo;
  constructor(navCtrl:NavController,navParams:NavParams) {
    this.ThingOne = navParams.get('thing1');
    this.ThingTwo = navParams.get('thing2');

    console.log(this.ThingOne);
    console.log(this.ThingTwo);
  }

}
