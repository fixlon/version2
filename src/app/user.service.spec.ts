import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { UserService } from './user.service';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule
      providers: [UserService]
    });
  });

  it('should ...', () => {
    const service: UserService = TestBed.inject(UserService); // Use TestBed.inject to get the service
    expect(service).toBeTruthy();
  });
});
