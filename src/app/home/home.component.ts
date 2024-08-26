import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

interface Item {
  id: number;
  price: number;
  name: string;
  isStudent: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule, NavbarComponent, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( //Dependency injection
    public router: Router,
  ){}
  link = 'https://facebook.com';
  click = false;
  terms = false;
  userInput = ""

  items=[
    {id: 1, name:'pen', price: 100, available: true},
    {id: 2, name:'T-Shirt', price: 3000, available: true},
    {id: 3, name:'Book', price: 500, available: true},
    {id: 4, name:'Journal', price: 6000, available: false},
  ]

  itemis: Item[] =[
    {id: 1, name:'pen', price: 100, isStudent: true},
    {id: 2, name:'T-Shirt', price: 3000, isStudent: true},
    {id: 3, name:'Book', price: 500, isStudent: true},
    {id: 4, name:'Journal', price: 6000, isStudent: false},
  ]
  myFunction(){
    console.log('Hello world');
    alert( 'I am the alert')
  }

  Clickbtn(item: any): void {
    item.isStudent = !item.isStudent;
  }

  goToProduct(){
    this.router.navigate(['/products']);
  }
}

