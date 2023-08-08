import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentserviceComponent } from './paymentservice.component';

describe('PaymentserviceComponent', () => {
  let component: PaymentserviceComponent;
  let fixture: ComponentFixture<PaymentserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentserviceComponent]
    });
    fixture = TestBed.createComponent(PaymentserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
