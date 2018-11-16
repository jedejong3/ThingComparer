import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'backstory',
  templateUrl: 'backstory.html'
})
export class BackStory {

  constructor(public navCtrl: NavController) {

  }
  backButton() {
    this.navCtrl.pop();
  }

   hide1() {
    var x = document.getElementById("image1");
    var y =document.getElementById("txt1");
    y.style.display ="none";
    x.style.display = "none";

  }
  hide2() {
    var x = document.getElementById("image2");
    var y =document.getElementById("txt2");
    y.style.display ="none";
    x.style.display = "none";

  }
}
