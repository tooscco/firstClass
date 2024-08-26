import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 constructor(public userser: UserserviceService){}
 public userarray:any=[]
 public userarraytwo:any=[]
 public message:string =''

 ngOnInit(){
  console.log(this.userser.getuserarray());
  this.userarray=this.userser.getuserarray()
  console.log(this.userarray);
  this.userarraytwo=this.userser.getuserarraytwo()
  console.log(this.userarraytwo);
  this.message=this.userser.msg
  console.log(this.message);
  
  
  
  
 }
}
