import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailListComponent } from './shopping-detail-list.component';

describe('ShoppingDetailListComponent', () => {
  let component: ShoppingDetailListComponent;
  let fixture: ComponentFixture<ShoppingDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingDetailListComponent ]
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
