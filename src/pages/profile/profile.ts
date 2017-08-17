import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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


  showPopup(text){


    let alert = this.alertCtrl.create({
      title: 'You are Logged out',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);

  }
}
