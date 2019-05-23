import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificHotelComponent } from './specific-hotel.component';

describe('SpecificHotelComponent', () => {
  let component: SpecificHotelComponent;
  let fixture: ComponentFixture<SpecificHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
