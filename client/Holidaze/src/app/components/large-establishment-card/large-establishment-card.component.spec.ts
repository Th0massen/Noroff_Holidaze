import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeEstablishmentCardComponent } from './large-establishment-card.component';

describe('LargeEstablishmentCardComponent', () => {
  let component: LargeEstablishmentCardComponent;
  let fixture: ComponentFixture<LargeEstablishmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeEstablishmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeEstablishmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
