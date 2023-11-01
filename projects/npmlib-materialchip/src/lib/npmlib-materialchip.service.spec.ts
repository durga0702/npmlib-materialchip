import { TestBed } from '@angular/core/testing';

import { NpmlibMaterialchipService } from './npmlib-materialchip.service';

describe('NpmlibMaterialchipService', () => {
  let service: NpmlibMaterialchipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmlibMaterialchipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
