import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerComponent } from './her.component';

describe('HerComponent', () => {
  let component: HerComponent;
  let fixture: ComponentFixture<HerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
