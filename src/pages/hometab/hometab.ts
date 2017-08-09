import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OrdersPage } from '../orders/orders';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the HometabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html'
})
export class HometabPage {

  homeRoot = 'HomePage'
  ordersRoot = 'OrdersPage'
  cartRoot = 'CartPage'
  profileRoot = 'ProfilePage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
