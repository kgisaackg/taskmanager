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
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
