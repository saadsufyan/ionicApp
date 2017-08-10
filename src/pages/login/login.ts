import { Component } from '@angular/core';
import { IonicPage,AlertController,LoadingController,Loading, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  loading: Loading;
  loginCredentials = {username: '', password: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount(){
    console.log("signup btn clicked");
    this.navCtrl.push('RegisterPage');
  }

  public goToMainPage(){
    this.navCtrl.push("HomePage");
  }

  public clickForgetPassword(){
    this.navCtrl.push('ForgetPasswordPage');
  }

  public login(){
    this.showLoading()
    this.auth.login(this.loginCredentials).subscribe(allowed => {
      if(allowed){
        this.navCtrl.setRoot('HometabPage');
        console.log("login_scene on hai");
      } else {
        this.showError("Please Enter Username & Password");
        console.log("login_why im here ?");
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
    console.log("need to move now from here");
  }
}
