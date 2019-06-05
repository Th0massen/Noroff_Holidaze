import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelFormComponent } from './add-hotel-form.component';

describe('AddHotelFormComponent', () => {
  let component: AddHotelFormComponent;
  let fixture: ComponentFixture<AddHotelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHotelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
