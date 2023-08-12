/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaircutComponent } from './haircut.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from 'src/app/search/search.component';
import { FormsModule } from '@angular/forms';

describe('HaircutComponent', () => {
  let component: HaircutComponent;
  let fixture: ComponentFixture<HaircutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircutComponent ,SearchComponent],
      imports: [HttpClientTestingModule,FormsModule],
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
