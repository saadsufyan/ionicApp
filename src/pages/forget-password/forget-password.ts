import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  createSuccess = false;
  submitCredentials = {email: ''};

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, private auth: AuthServiceProvider, public navParams: NavParams) {
  }
  
  backToLogin(){
    this.navCtrl.push('LoginPage');
  }

  public forgetPassword(){
    this.auth.forgetPass(this.submitCredentials).subscribe(success =>{
      if(success){
        //this.createSuccess = true;
        this.showPopup("success", "Email Sent");
      } else{
        this.showPopup("Error","Email address is not valid");
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
