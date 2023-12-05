import { TestBed } from '@angular/core/testing';

import { NormogramaExcelService } from './normograma-excel.service';

describe('NormogramaExcelService', () => {
  let service: NormogramaExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormogramaExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
