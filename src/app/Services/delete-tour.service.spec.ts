import { TestBed } from '@angular/core/testing';

import { DeleteTourService } from './delete-tour.service';

describe('DeleteTourService', () => {
  let service: DeleteTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
