import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivechatPage } from './livechat.page';

describe('LivechatPage', () => {
  let component: LivechatPage;
  let fixture: ComponentFixture<LivechatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivechatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivechatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
