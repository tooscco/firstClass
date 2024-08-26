import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-display-grocery',
  standalone: true,
  imports: [],
  templateUrl: './display-grocery.component.html',
  styleUrl: './display-grocery.component.css'
})
export class DisplayGroceryComponent {
  constructor(
    public route: ActivatedRoute,
    public productService: ProductServiceService
  ){}

    public users: any =[];
  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('id'));

    this.productService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
      
    })
    
  }


}
