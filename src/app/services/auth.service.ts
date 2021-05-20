import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
//import { auth } from  'firebase/app';
import { User } from '../type/user';

import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,
    private afs: AngularFirestore) { 

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

  logout(){
    return this.afAuth.signOut();
  }
  
  emailSignup(firstname: string, lastname: string, email: string, password: string) {
    console.log(email, password);
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((value: any) => {
     console.log('Sucess', value);
     const user: User = {
       firstname, 
       lastname,
       email,
       uid: value.user.uid
     }
     
     this.registerUser(user);
     console.log(user);
     this.router.navigateByUrl('/showtask');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });

  }

  

  registerUser(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    return userRef.set(user, {
      merge: true
    });
  }

}
