import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
//import { auth } from  'firebase/app';


import { AngularFireAuth } from  "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 

    this.afAuth.authState.subscribe(user => {
      if (user){
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', "null");
      }
    });

  }

  login(email: string, password: string) {
    console.log(email, password);
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then((value:any)  => {
      console.log('Nice, it worked!');
      console.log(value);
      this.router.navigateByUrl('/showtask');
    })
    .catch((err:any) => {
      console.log('Something went wrong: ', err.message);
    });
  }
  
  emailSignup(email: string, password: string) {
    console.log(email, password);
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/showtask');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

}
