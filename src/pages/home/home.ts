import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';
import { CartPage } from '../cart/cart';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToDetails(){
    this.navCtrl.push(Details);
  }
    goToCart(){
    this.navCtrl.push(CartPage);
  }

}
