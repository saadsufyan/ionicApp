import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class User{
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }
}

export class AuthServiceProvider {

  currentUser: User;

  public login(credentials){
    if (credentials.email === null || credentials.password === null){
      return Observable.throw("Please insert credentials");
    } else{
      return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email")
        this.currentUser = new User('saad','saadsufyan19@gmail.com');
        observer.next(access);
        observer.complete();
        console.log("im here");

      });
    }
  }

  public register (credentials){
    if(credentials.email === null || credentials.password === null){
      return Observable.throw("Please insert credentials");
    }else{
      //At this point store the credentials to your backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
        console.log("im also here");
      });
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
    });
  }
}
