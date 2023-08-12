import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentserviceComponent } from './paymentservice.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('PaymentserviceComponent', () => {
  let component: PaymentserviceComponent;
  let fixture: ComponentFixture<PaymentserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentserviceComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(PaymentserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
