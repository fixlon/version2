import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipComponent } from './membership.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MembershipComponent', () => {
  let component: MembershipComponent;
  let fixture: ComponentFixture<MembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(MembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
