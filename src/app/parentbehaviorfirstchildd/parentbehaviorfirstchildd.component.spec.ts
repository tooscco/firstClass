import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehaviorfirstchilddComponent } from './parentbehaviorfirstchildd.component';

describe('ParentbehaviorfirstchilddComponent', () => {
  let component: ParentbehaviorfirstchilddComponent;
  let fixture: ComponentFixture<ParentbehaviorfirstchilddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehaviorfirstchilddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbehaviorfirstchilddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
