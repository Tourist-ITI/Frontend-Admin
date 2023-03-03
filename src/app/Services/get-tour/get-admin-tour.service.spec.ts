import { TestBed } from '@angular/core/testing';

import { GetAdminTourService } from './get-admin-tour.service';

describe('GetAdminTourService', () => {
  let service: GetAdminTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdminTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
