import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailListComponent } from './shopping-detail-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductFilterPipe } from 'src/app/shared/pipes/product-filter.pipe';

describe('ShoppingDetailListComponent', () => {
  let component: ShoppingDetailListComponent;
  let fixture: ComponentFixture<ShoppingDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDetailListComponent, ProductFilterPipe ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
