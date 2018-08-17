import { TestBed, inject } from '@angular/core/testing';

import { PalabraService } from './palabra.service';

describe('PalabraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalabraService]
    });
  });

  it('should be created', inject([PalabraService], (service: PalabraService) => {
    expect(service).toBeTruthy();
  }));
});
