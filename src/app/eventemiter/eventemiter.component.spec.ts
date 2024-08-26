import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemiterComponent } from './eventemiter.component';

describe('EventemiterComponent', () => {
  let component: EventemiterComponent;
  let fixture: ComponentFixture<EventemiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventemiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventemiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
