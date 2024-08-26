import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactivedb',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './reactivedb.component.html',
  styleUrl: './reactivedb.component.css'
})
export class ReactivedbComponent {
  name: any = {};  // Use any to allow for object structure

  constructor(public service: ContactService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.name =JSON.parse(localStorage.getItem('currentreactiveapp')!)
  }

  del(){
    localStorage.removeItem('currentreactiveapp');
    console.log(localStorage['currentreactiveapp']);
    
  }
}
