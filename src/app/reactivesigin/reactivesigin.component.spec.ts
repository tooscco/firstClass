import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesiginComponent } from './reactivesigin.component';

describe('ReactivesiginComponent', () => {
  let component: ReactivesiginComponent;
  let fixture: ComponentFixture<ReactivesiginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivesiginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivesiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
