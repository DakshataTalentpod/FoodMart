import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import{User} from '../../mock/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User=new User();
  registerForm: FormGroup;
  submitted = false;
  hide=true;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password:['', [Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],

      contact:this.formBuilder.group({
        mobilenumber: ['', [Validators.required, Validators.pattern('([0-9]{10})')]],
      emailId: ['', [Validators.required, Validators.email]],

      address:this.formBuilder.group({
      line:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      pincode:['', [Validators.required,Validators.minLength(5),Validators.maxLength(8)]]
      })
    })
 
  })
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
let email=this.registerForm.get('contact').get('emailId').value;
let password=this.registerForm.get('password').value;
localStorage.setItem('email',email);
localStorage.setItem('password',password);
    alert('SUCCESS!)');
    this.router.navigate(['/signIn']);
    // console.log( this.f.name.value);
    // console.log( this.f.userName.value);
    // console.log( this.f.contact.value);
    // console.log( this.f.address.value);
}



}
