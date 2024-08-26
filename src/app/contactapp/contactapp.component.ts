import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactapp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactapp.component.html',
  styleUrl: './contactapp.component.css'
})
export class ContactappComponent {
  public name='';
  public phonenumber= '';
  public email='';
  public address='';
  public nametwo='';
  public phonenumbertwo='';
  public emailtwo='';
  public addresstwo='';
  public contactarray:any []=[];
  public editIndex: number | null = null;

  // ngOnInit(){
  //   let data = localStorage.getItem('appcontacts');
  //   if (data){
  //     this.contactarray=JSON.parse(data);
  //   }
  //  }
  //OR
  ngOnInit(){
    this.contactarray=JSON.parse(localStorage.getItem('appcontacts')!);
   }
 
 createcontact(){
  let contactobj={
    name:this.name,
    pnumber:this.phonenumber,
    email:this.email,
    add:this.address,
  }
  
  
  this.contactarray.push(contactobj);
  // console.log(this.contactarray);
  localStorage.setItem('appcontacts', JSON.stringify(this.contactarray));
  console.log(localStorage['appcontacts']);

  this.name = '';
  this.phonenumber = '';
  this.email = '';
  this.address = '';
}

 del(i:number) {
  this.contactarray.splice(i,1);
  localStorage.setItem('appcontacts', JSON.stringify(this.contactarray))
 }
 edit(i:number) {
  localStorage.setItem('newindex', JSON.stringify(i))
 }

 editContact(index: number) {
  this.editIndex = index;
  const contact = this.contactarray[index];
  this.nametwo = contact.name;
  this.phonenumbertwo = contact.pnumber;
  this.emailtwo = contact.email;
  this.addresstwo = contact.add;
}
 contactUpdate(){
  if (this.editIndex === null) {
    alert('No contact selected for update');
    return;
  }

  let index = localStorage['newindex'];

  let newContact={
    name:this.nametwo,
    pnumber:this.phonenumbertwo,
    email:this.emailtwo,
    add:this.addresstwo,
  };

  // if(!this.nametwo && !this.phonenumbertwo && !this.addresstwo && !this.emailtwo){
  //   alert('this can not be created')
  //   return;
  // }
  
  this.contactarray.splice(index, 1 , newContact)
  localStorage.setItem('appcontacts', JSON.stringify(this.contactarray))
  
  this.nametwo = '';
  this.phonenumbertwo = '';
  this.emailtwo = '';
  this.addresstwo = '';
  this.editIndex = null;
 }
 
}
