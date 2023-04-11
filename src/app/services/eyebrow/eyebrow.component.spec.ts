/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EyebrowComponent } from './eyebrow.component';

describe('EyebrowComponent', () => {
  let component: EyebrowComponent;
  let fixture: ComponentFixture<EyebrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyebrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyebrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
