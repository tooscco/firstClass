import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  public contactbehaviour=new BehaviorSubject<any>({
    name: 'ola',
    pnumber:'07037698451',
    email: 'ade@gmail.com',
    add:'Ogbomoso',
  })

  public getcontact(): any{
    return JSON.parse(localStorage.getItem('appcontacts')!);
  }

  public getreactive(){
    return JSON.parse (localStorage.getItem('reactiveapp')!)
  }
}
