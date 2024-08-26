import { Component } from '@angular/core';
import { EventemiterchildComponent } from '../eventemiterchild/eventemiterchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventemiter',
  standalone: true,
  imports: [EventemiterchildComponent, FormsModule],
  templateUrl: './eventemiter.component.html',
  styleUrl: './eventemiter.component.css'
})
export class EventemiterComponent {
public msg= '';
public childmsg= ''
public msgToChild = '';

sendtochild(){
  this.msgToChild =this.msg;
  this.msg='';
}

receivemsg(data: any){
  this.childmsg= data
}
}
