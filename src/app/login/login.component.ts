import { uniqunessValidator } from './../Validate/uniquness.valdidations';
import { Testvalidator } from './../Validate/validator.valdidations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent{

  logObj(email){
    console.log(email);
  }



  // Reactive validation

  form = new FormGroup({
    email : new FormControl('' , [Validators.required , Testvalidator.noSpaceAllowed ],
    uniqunessValidator.checkuniquness), // AsyncValidation
    //, uniqunessValidator.checkuniquness
    password : new FormControl('' , Testvalidator.noSpaceAllowed),
  })


  get email (): any{
    return this.form.get('email');
  }
  get password (): any{
    return this.form.get('password');
  }

}
