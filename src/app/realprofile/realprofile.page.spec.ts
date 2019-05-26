import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealprofilePage } from './realprofile.page';

describe('RealprofilePage', () => {
  let component: RealprofilePage;
  let fixture: ComponentFixture<RealprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
