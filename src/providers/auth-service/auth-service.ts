import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()


export class fish{
  fish_name: string;
  fish_stock: string;
  fish_price: string;
  fish_description: string;

  constructor(fishname: string, fishstock: string, fishprice: string, fishdescription: string){
    this.fish_name = fishname;
    this.fish_stock = fishstock;
    this.fish_price = fishprice;
    this.fish_description = fishdescription;
  }


}

export class User{
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  constructor(username: string, email: string, phone: string, password: string, confirmPassword: string ){
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.confirmPassword = confirmPassword;

  }
}

export class AuthServiceProvider {

  currentUser: User;

  public login(credentials){
    if (credentials.username === null || credentials.password === null){
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "123" && credentials.username === "saad")
        this.currentUser = new User('saad','saadsufyan19@gmail.com','03472025817','123','123');
        observer.next(access);
        observer.complete();
        console.log("im at login method");

      });
    }
  }

  public register(credentials){
    console.log(credentials)
    if(credentials.username === null ||credentials.email === null || credentials.phone === null || credentials.password === null || credentials.confirmPassword === null){
      return Observable.throw("Please insert credentials");
    } else {
      //At this point store the credentials to your backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
        console.log("im at register method");
      });
    }
  }

  public forgetPass(credentials){
    if(credentials.email === null){
      return Observable.throw("please insert email");
    }else {
       //At this point store the credentials to your backend
      return Observable.create(observer =>{
        observer.next(true);
        observer.complete();
        console.log("im at forgetPassword method");
      })
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }
  
  public logout(){
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
      console.log("im at logout method");
    });
  }
}
