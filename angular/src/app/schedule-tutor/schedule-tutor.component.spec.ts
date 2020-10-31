import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTutorComponent } from './schedule-tutor.component';

describe('ScheduleTutorComponent', () => {
  let component: ScheduleTutorComponent;
  let fixture: ComponentFixture<ScheduleTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
