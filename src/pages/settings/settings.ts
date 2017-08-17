import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {  TermsAndConditionsPage } from '../terms-and-conditions/terms-and-conditions';
import { FaqPage } from '../faq/faq';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  goToTermsAndCondition(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  goToFAQ(){
    this.navCtrl.push(FaqPage);
  }

  showPopup(text){


    let alert = this.alertCtrl.create({
      title: 'submitted',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);

  }
}
