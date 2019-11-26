import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWinPage } from './modal-win.page';

describe('ModalWinPage', () => {
  let component: ModalWinPage;
  let fixture: ComponentFixture<ModalWinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
