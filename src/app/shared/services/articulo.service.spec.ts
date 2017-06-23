import { TestBed, inject } from '@angular/core/testing';

import { ArticuloService } from './articulo.service';

describe('ArticuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticuloService]
    });
  });

  it('should ...', inject([ArticuloService], (service: ArticuloService) => {
    expect(service).toBeTruthy();
  }));
});