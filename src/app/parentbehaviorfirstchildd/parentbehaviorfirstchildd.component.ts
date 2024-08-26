import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parentbehaviorfirstchildd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parentbehaviorfirstchildd.component.html',
  styleUrl: './parentbehaviorfirstchildd.component.css'
})
export class ParentbehaviorfirstchilddComponent {
 constructor(public conservice:ContactService){}

 public contactarray:any=[]
 ngOnInit(){
  // this.contactarray=JSON.parse(localStorage.getItem('appcontacts')!)
  // console.log(this.contactarray);
  console.log(this.conservice.getcontact());
  this.contactarray=this.conservice.getcontact();
  console.log(this.contactarray);
  
 }

 updatecontact(contact:any){
console.log(contact);
this.conservice.contactbehaviour.next(contact);

 }
}
