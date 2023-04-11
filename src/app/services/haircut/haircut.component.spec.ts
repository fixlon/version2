/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaircutComponent } from './haircut.component';

describe('HaircutComponent', () => {
  let component: HaircutComponent;
  let fixture: ComponentFixture<HaircutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
