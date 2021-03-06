import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { MainPage } from '../pages/main/main';
import { LanguagePage } from '../pages/language/language';
import { OrdersPage } from '../pages/orders/orders';
import { CartPage } from '../pages/cart/cart';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { Cart1 } from '../pages/cart1/cart1';
import { Details } from '../pages/details/details';
import {  TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { FaqPage } from '../pages/faq/faq';


@NgModule({
  declarations: [
    MyApp,
    LanguagePage,
    CartPage,
    Cart1,
    Details,
    TermsAndConditionsPage,
    FaqPage
    

   


   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LanguagePage,
    CartPage,
    Cart1,
    Details,
    TermsAndConditionsPage,
    FaqPage

 

  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
