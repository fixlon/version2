/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkincleaningComponent } from './skincleaning.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkincleaningComponent', () => {
  let component: SkincleaningComponent;
  let fixture: ComponentFixture<SkincleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkincleaningComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
