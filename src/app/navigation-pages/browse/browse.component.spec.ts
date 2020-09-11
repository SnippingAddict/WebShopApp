import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponent } from './browse.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductFilterPipe } from 'src/app/shared/pipes/product-filter.pipe';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  let pipe: ProductFilterPipe

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseComponent, ProductFilterPipe ],
      imports: [HttpClientTestingModule],
      providers: [ProductFilterPipe]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
