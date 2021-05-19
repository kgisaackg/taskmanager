import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  })


  onSubmit(){
    this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password);
  }

}
