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
    console.log(x.title);
      x.style.display = "none";

  }
  hide2() {
    var x = document.getElementById("image2");
    console.log(x.title);
    x.style.display = "none";

  }
}
