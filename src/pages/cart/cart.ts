import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart1 } from '../cart1/cart1';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  fishcount : number = 0;

  public databinding : any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.databinding = "I am here"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

    clickCounterAdd(){
    this.fishcount = this.fishcount + 1;
  }
  clickCounterSub(){

    if(this.fishcount>0){
      this.fishcount = this.fishcount - 1;
    }
  }
  
  goToCheckout(){
      this.navCtrl.push(Cart1);
    }
}
