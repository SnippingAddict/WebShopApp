import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailComponent } from './shopping-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product } from 'src/app/shared/models/product';

describe('ShoppingDetailComponent', () => {
  let component: ShoppingDetailComponent;
  let fixture: ComponentFixture<ShoppingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDetailComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
