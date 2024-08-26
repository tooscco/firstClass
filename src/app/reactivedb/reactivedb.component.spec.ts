import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedbComponent } from './reactivedb.component';

describe('ReactivedbComponent', () => {
  let component: ReactivedbComponent;
  let fixture: ComponentFixture<ReactivedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivedbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
