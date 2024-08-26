import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  public userarry:(number | string)[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 'I am eating dodo']

  public msg: string= 'This is SQI'

  public userarry2: any=[
    {
      fname: 'Muizz',
      lname: 'sail',
      age: 36,
    }, 
    {
      fname: 'fabregas',
      lname: 'sail',
      age: 36,
    },
    {
      fname: 'Teeboy',
      lname: 'sail',
      age: 36,
    },
    
  ]

  getuserarray(){
    return this.userarry
  }

  getuserarraytwo(){
    return this.userarry2
  }
}
