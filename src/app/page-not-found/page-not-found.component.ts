import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ MatButtonModule, MatDividerModule, MatIconModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  private _formBuilder = inject(FormBuilder);
  public array = [];

  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    lastCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
  });
  thirdFormGroup= this._formBuilder.group({
    pnumber: ['', Validators.required]
  });
  forthFormGroup = this._formBuilder.group({
    address: ['', Validators.required]
  })
  groupForm =[
    this.firstFormGroup,
    this.secondFormGroup,
    this.thirdFormGroup,
    this.forthFormGroup,
  ];

    isLinear = false;

  submit(){
   const data = {};
   for (const group of this.groupForm){
    Object.assign(data, group.value);
   }
  //  this.array.push(data);
  console.log(this.array); 
  console.log('FormData:', data);
  }
}
