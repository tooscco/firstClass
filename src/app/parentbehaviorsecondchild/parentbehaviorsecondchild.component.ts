import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-parentbehaviorsecondchild',
  standalone: true,
  imports: [],
  templateUrl: './parentbehaviorsecondchild.component.html',
  styleUrl: './parentbehaviorsecondchild.component.css'
})
export class ParentbehaviorsecondchildComponent {
  constructor(public contactservice:ContactService){}
  public contactobj: any={}

  ngOnInit(){
    console.log(this.contactservice.contactbehaviour);
    this.contactservice.contactbehaviour.subscribe(data =>{
      console.log(data);
      this.contactobj=data
    })
    
  }

}
