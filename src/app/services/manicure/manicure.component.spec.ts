/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManicureComponent } from './manicure.component';

describe('ManicureComponent', () => {
  let component: ManicureComponent;
  let fixture: ComponentFixture<ManicureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManicureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
