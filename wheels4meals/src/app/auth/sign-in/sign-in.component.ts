import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{User} from '../../mock/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
user:User=new User();
logInForm:FormGroup;

emailId:string;
password:string;
submitted = false;
hide=true;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({

      emailId: ['',[Validators.required,Validators.email] ],
      password:['', Validators.required]
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  // get f() { return this.logInForm.controls; }
  
  onLogInSubmit(){
    this.submitted = true;
this.emailId=localStorage.getItem('email');
this.password=localStorage.getItem('password');
if (this.logInForm.get('emailId').value==this.emailId && this.logInForm.get('password').value==this.password) {
       alert("Login successful");
       this.router.navigate(['/restaurant']);
    }
else{
  alert("Email or Password is wrong");
  }
   
   
}
  
}
