import { Component } from '@angular/core';
import { ParentbehaviorfirstchilddComponent } from '../parentbehaviorfirstchildd/parentbehaviorfirstchildd.component';
import { ParentbehaviorsecondchildComponent } from '../parentbehaviorsecondchild/parentbehaviorsecondchild.component';

@Component({
  selector: 'app-parentbehavior',
  standalone: true,
  imports: [ParentbehaviorfirstchilddComponent, ParentbehaviorsecondchildComponent],
  templateUrl: './parentbehavior.component.html',
  styleUrl: './parentbehavior.component.css'
})
export class ParentbehaviorComponent {

}
