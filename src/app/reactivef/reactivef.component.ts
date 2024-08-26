import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactivef',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './reactivef.component.html',
  styleUrl: './reactivef.component.css'
})
export class ReactivefComponent {
constructor(public formbuilder: FormBuilder, public routes:Router){}
public array: any[] =[]
public msg ='';
public msgg ='';
public formone=this.formbuilder.group({
  // without validators

  // firstname:'',
  // lastname:'',
  // email:'',
  // password:'',


  // for validation
  username: ['', Validators.required],
  firstname: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  lastname: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$')]],
  agreeTerms: [false, Validators.requiredTrue],
});

ngOnInit(){
  this.array= JSON.parse(localStorage.getItem('reactiveapp') || '[]');
}
signup(){
  // console.log(this.formone.value);
  // console.log(this.formone.value['firstname']);
  // console.log(this.formone.controls['firstname'].setValue(''));
  const email= this.formone.value.email;
  const username= this.formone.value.username;
  const existEmail = this.array.some(user=> user.email ===email);
  const existUsername = this.array.some(user=> user.username ===username);
  if(existEmail){
    this.msg='Email already exists';
    return
  }
  if(existUsername){
    this.msgg='Username already exists!';
    return;
  }

if(this.formone.valid){
  this.array.push(this.formone.value);
  localStorage.setItem('reactiveapp', JSON.stringify(this.array));
  console.log(localStorage['reactiveapp']);
  this.routes.navigate(['/reactivesignin']);
  
}


    // this.array.push(this.formone.value)
    // localStorage.setItem('reactiveapp', JSON.stringify(this.array))
    // console.log(localStorage['reactiveapp']);
    // if(localStorage['reactiveapp']){
    //   this.routes.navigate(['/reactivesignin'])
    // }
}
}
