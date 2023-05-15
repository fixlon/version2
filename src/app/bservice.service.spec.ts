/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BserviceService } from './bservice.service';

describe('Service: Bservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BserviceService]
    });
  });

  it('should ...', inject([BserviceService], (service: BserviceService) => {
    expect(service).toBeTruthy();
  }));
});
