import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionsPage } from './addquestions.page';

describe('AddquestionsPage', () => {
  let component: AddquestionsPage;
  let fixture: ComponentFixture<AddquestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquestionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
