import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';
import { SubTaskComponent } from './components/sub-task/sub-task.component';
import { AddSubTaskComponent } from './components/add-sub-task/add-sub-task.component';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSaFe25xHlvxstpA8Evs8CzIv85hn648k",
  authDomain: "authentication-15cfc.firebaseapp.com",
  projectId: "authentication-15cfc",
  storageBucket: "authentication-15cfc.appspot.com",
  messagingSenderId: "106161072750",
  appId: "1:106161072750:web:c9cc5fa5694a5673cf547f",
  measurementId: "G-MM6Q9BLRJX"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddTaskComponent,
    ShowTaskComponent,
    SubTaskComponent,
    AddSubTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
