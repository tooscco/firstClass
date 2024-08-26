import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
 

export class RegisterComponent {
  constructor(private route: Router) {}

  register(){
    this.route.navigate(['/login'])
  }
   
}
