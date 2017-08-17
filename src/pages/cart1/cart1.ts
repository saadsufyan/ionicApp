import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,ActionSheetController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart1');
  }
  backToCart(){
    this.navCtrl.push(CartPage);
  }

  showPopup(text){


    let alert = this.alertCtrl.create({
      title: 'Your Order is recieved, Thank you choosing our service',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);

  }

}
