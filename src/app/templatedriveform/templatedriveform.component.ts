import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriveform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedriveform.component.html',
  styleUrl: './templatedriveform.component.css'
})
export class TemplatedriveformComponent {
 public fname= '';
 public lname= '';
}
