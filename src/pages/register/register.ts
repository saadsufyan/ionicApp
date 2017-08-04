import { Component } from '@angular/core';
import { IonicPage, AlertController,NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  createSuccess = false;
  registerCredentials = {email: '', password: ''}

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, private auth: AuthServiceProvider, public navParams: NavParams) {
  }

  public register(){
    this.auth.register(this.registerCredentials).subscribe(success =>{
     if(success){
      this.createSuccess = true;
      this.showPopup("success", "Account created");
     } else{
       this.showPopup("Error","Problem creating account.");
     }
      
    },
  error =>{
    this.showPopup("Error",error);
  });
  }

  showPopup(title, text){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data =>{
            if (this.createSuccess){
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
