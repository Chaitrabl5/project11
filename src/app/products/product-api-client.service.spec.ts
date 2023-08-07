import { TestBed } from '@angular/core/testing';

import { ProductApiClientService } from './product-api-client.service';

describe('ProductApiClientService', () => {
  let service: ProductApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
