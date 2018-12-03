import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'backstory',
  templateUrl: 'backstory.html'
})
export class BackStory {
  private clickCount;

  constructor(public navCtrl: NavController) {
    this.clickCount=0;
   // this.resetPage();


  }
  backButton() {
    this.resetPage();
    this.navCtrl.pop();
  }
  click(){
    this.clickCount++;
    if(this.clickCount==1) {
      document.getElementById("image1").style.visibility = "hidden";
      document.getElementById("image2").style.visibility = "visible";

    }
    if(this.clickCount==2) {
      document.getElementById("image1").style.visibility = "hidden";
      document.getElementById("image2").style.visibility = "hidden";
      document.getElementById("image3").style.visibility = "visible";
      document.getElementById("next").style.visibility = "hidden";
    }
    if(this.clickCount==3){
      this.clickCount=0;
      this.resetPage();
    }


  }
    resetPage()
    {
      document.getElementById("image3").style.visibility = "hidden";
      document.getElementById("image2").style.visibility = "hidden";
      document.getElementById("image1").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";

      this.clickCount=0;

    }


}
