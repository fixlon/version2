/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HairstyleComponent } from './hairstyle.component';

describe('HairstyleComponent', () => {
  let component: HairstyleComponent;
  let fixture: ComponentFixture<HairstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
