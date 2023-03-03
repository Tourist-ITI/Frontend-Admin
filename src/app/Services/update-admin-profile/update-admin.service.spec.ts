import { TestBed } from '@angular/core/testing';

import { UpdateAdminService } from './update-admin.service';

describe('UpdateAdminService', () => {
  let service: UpdateAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
