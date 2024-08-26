import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivesigin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './reactivesigin.component.html',
  styleUrl: './reactivesigin.component.css'
})
export class ReactivesiginComponent {
  constructor(public formsign: FormBuilder, public routes:Router){}
  public email=''
  public password=''
  public array=[]

  ngOnInit(){
    this.array=JSON.parse(localStorage.getItem('reactiveapp')!)
  }

  signInFrom(){

      let user = this.array.find(
        (user: any, index:number) => user.email === this.email && user.password === this.password
      );
      if (user) {
        localStorage.setItem('currentreactiveapp', JSON.stringify(user));
        
        // this.routes.navigate(['/pipe']);
        this.routes.navigate([`/reactivedb/${user['username']}`]);
      } else {
        alert('Incorrect email or password.');
      }
    } 
  
}
