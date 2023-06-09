/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PedicureComponent } from './pedicure.component';

describe('PedicureComponent', () => {
  let component: PedicureComponent;
  let fixture: ComponentFixture<PedicureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedicureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
