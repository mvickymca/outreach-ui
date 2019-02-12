import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  error: User;
  loginForm: FormGroup;
  loginFormControl;
  loginClicked: boolean = false;
  constructor(private formBuilder: FormBuilder, private authServ: AuthService, private router: Router) {
    this.user = new User();
    this.error = new User();
    this.intializeLoginForm();
    this.loginFormControl = this.loginForm.controls;
  }
  ngOnInit(){}

  private intializeLoginForm() {
    let loginFormGroup = {
    //   'emailId': [, Validators.compose([Validators.required, Validators.minLength(5)])],
    //   'password': [, Validators.compose([Validators.required, Validators.minLength(5)])]
    // 
  };
    this.loginForm = this.formBuilder.group(loginFormGroup);
  }

  loginUser(email,password)
  {
    // && password==="admin"
    // if(email==='613312' )
    // { 
      this.router.navigate(['/dashboard']);
    // }
    // else{
      // alert("User error");
    // }
  }

}
