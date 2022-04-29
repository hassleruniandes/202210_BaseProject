import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from './vehiculo.service';

describe('VehiculoService', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(VehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
