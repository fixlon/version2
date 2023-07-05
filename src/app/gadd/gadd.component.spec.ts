/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GaddComponent } from './gadd.component';

describe('GaddComponent', () => {
  let component: GaddComponent;
  let fixture: ComponentFixture<GaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
