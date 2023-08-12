/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaxingComponent } from './waxing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WaxingComponent', () => {
  let component: WaxingComponent;
  let fixture: ComponentFixture<WaxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaxingComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
