import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public databinding : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.databinding = "I am here"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
