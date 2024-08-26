import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstClass';
  link = 'https://facebook.com';
  click = false;
  terms = false;

  name = 'teeboy';
  username: string = 'teeboy';

  num = 2;

  isAdmin = true;

  users:Array<any> = ['Tayo', 'Taiwo', 'Seun',];

  students = [
    {id: 1, name: 'Tosin', dep: 'Software'},
    {id: 2, name: 'Muizz', dep: 'Software'},
    {id: 3, name: 'Sodiq', dep: 'Software'}
  ];

  
}
