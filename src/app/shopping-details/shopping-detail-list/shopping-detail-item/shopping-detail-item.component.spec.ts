import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailItemComponent } from './shopping-detail-item.component';

describe('ShoppingDetailItemComponent', () => {
  let component: ShoppingDetailItemComponent;
  let fixture: ComponentFixture<ShoppingDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
