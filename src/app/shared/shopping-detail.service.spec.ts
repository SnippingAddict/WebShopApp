import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShoppingDetailService } from './shopping-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShoppingDetailService', () => {
  let service: ShoppingDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShoppingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
