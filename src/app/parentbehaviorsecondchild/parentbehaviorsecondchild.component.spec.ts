import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehaviorsecondchildComponent } from './parentbehaviorsecondchild.component';

describe('ParentbehaviorsecondchildComponent', () => {
  let component: ParentbehaviorsecondchildComponent;
  let fixture: ComponentFixture<ParentbehaviorsecondchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehaviorsecondchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbehaviorsecondchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
