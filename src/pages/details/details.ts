import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {
  fishcount : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }
  clickCounterAdd(){
    this.fishcount = this.fishcount + 1;
  }
  clickCounterSub(){
     this.fishcount = this.fishcount - 1;
  }

}
