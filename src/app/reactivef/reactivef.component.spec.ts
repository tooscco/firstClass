import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefComponent } from './reactivef.component';

describe('ReactivefComponent', () => {
  let component: ReactivefComponent;
  let fixture: ComponentFixture<ReactivefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
