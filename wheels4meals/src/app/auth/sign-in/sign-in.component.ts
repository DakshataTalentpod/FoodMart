import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{User} from '../../mock/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
user:User=new User();
logInForm:FormGroup;
submitted = false;
hide=true;

  constructor(private formBuilder: FormBuilder) { }

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

    // stop here if form is invalid
    if (this.logInForm.invalid) {
        return;
    }

    alert('SUCCESS!! ');
    console.log(this.logInForm.value);
}
  
}
