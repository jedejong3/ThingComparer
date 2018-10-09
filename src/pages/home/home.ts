import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ResultsComponent} from "../results/results";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ThingOne;

  public ThingTwo;


  constructor(public navCtrl: NavController) {

  }


  compareClick() {
    var winner:String;
    var loser:String;
    var response:String;

    if (typeof this.ThingOne == "undefined") {
      this.ThingOne = "an empty void";
    }
    if (typeof this.ThingTwo == "undefined") {
      this.ThingTwo = "absolutely nothing";
    }
    if (Math.random()<=0.5) {
      winner = this.ThingOne;
      loser = this.ThingTwo;
    } else {
      winner = this.ThingTwo;
      loser = this.ThingOne;
    }

    //an array of the random responses
    const responses = [
      "Obviously " + winner.toString().toLowerCase() + " is better than " +
    loser.toString().toLowerCase() + ", everyone knows that.",
      "I like " + winner +  " better. Because I said so.",
      "I like " + winner + " better! " + loser + " sucks!",
      "Well, " + winner + " is mediocre, but I'll go with it anyway. I'm feeling spicy today."
    ];

    //picks a response from the array of responses
      response = responses[getRandomInt(responses.length)];


    this.navCtrl.push(ResultsComponent,{win:winner,loss:loser, respond:response})
  }



}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
