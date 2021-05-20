import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  customerForm = this.fb.group({ 
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z].{8,}')]],
    confirmPassword: ['',  Validators.required]
  })

  
  get firstname() { return this.customerForm.get('firstname')}

  get lastname() { return this.customerForm.get('lastname')}

  get emailAddress() { return this.customerForm.get('emailAddress')}

  get password() { return this.customerForm.get('password')}

  get confirmPassword() { return this.customerForm.get('confirmPassword')}

  
  onSubmit(){
   
    this.authService.emailSignup(this.customerForm.value.firstname, this.customerForm.value.lastname,
      this.customerForm.value.emailAddress, this.customerForm.value.password)
    console.log("submited")
  }
}
