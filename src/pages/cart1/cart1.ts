import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Cart1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart1',
  templateUrl: 'cart1.html',
})
export class Cart1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart1');
  }

}
