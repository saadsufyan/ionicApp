import { Component } from '@angular/core';
import { IonicPage,AlertController,LoadingController,Loading, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  
  }

  public createAccount(){
    this.navCtrl.push('RegisterPage');
  }

  public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        this.navCtrl.setRoot('homePage');
      }else{
        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'please wait . . .',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text){
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
