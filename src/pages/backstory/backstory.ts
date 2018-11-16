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


  }
  backButton() {
    this.resetPage();
    this.navCtrl.pop();
  }
  click(){
    this.clickCount++;
    if(this.clickCount==1) {
      document.getElementById("image1").style.display = "none";
      document.getElementById("image2").style.display = "visible";
      document.getElementById("txt1").style.display = "none";
      document.getElementById("txt2").style.display = "visible";
      document.getElementById("txt3").style.display = "none";
    }
    if(this.clickCount==2) {
      document.getElementById("image1").style.display = "none";
      document.getElementById("image2").style.display = "none";
      document.getElementById("txt1").style.display = "none";
      document.getElementById("txt2").style.display = "none";
      document.getElementById("txt3").style.display = "visible";
    }


  }
    resetPage()
    {
      document.getElementById("image1").style.display = "visible";
      document.getElementById("image2").style.display = "visible";
      document.getElementById("txt1").style.display = "visible";
      document.getElementById("txt2").style.display = "visible";
      this.clickCount=0;

    }


}
