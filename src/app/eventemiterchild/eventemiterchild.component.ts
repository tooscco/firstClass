import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventemiterchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventemiterchild.component.html',
  styleUrl: './eventemiterchild.component.css'
})
export class EventemiterchildComponent {
  
 @Input() public msgformparent=''
 public msgtoparent=''
 @Output() public eventemit=new EventEmitter

 sendmsg(){
this.eventemit.emit(this.msgtoparent)
this.msgtoparent='';
 }
}