import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemiterchildComponent } from './eventemiterchild.component';

describe('EventemiterchildComponent', () => {
  let component: EventemiterchildComponent;
  let fixture: ComponentFixture<EventemiterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventemiterchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventemiterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
