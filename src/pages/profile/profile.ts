import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart1 } from '../cart1/cart1';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getProfileInfo(){
    this.fullName;
    this.emailAddress;
    this.phoneNumber;
    this.address;
  }
  goToCartPage(){
    this.navCtrl.push(Cart1);
  }
}
