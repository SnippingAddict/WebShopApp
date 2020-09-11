import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingDetailItemComponent } from './shopping-detail-item.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/shared/services/product.service';

describe('ShoppingDetailItemComponent', () => {
  let component: ShoppingDetailItemComponent;
  let fixture: ComponentFixture<ShoppingDetailItemComponent>;

  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingDetailItemComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [ProductService],
    });
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should fetch products as an Observable`, async(

    //dependency injection (ubrizgavanje zavisnosti)
    inject( 
      [HttpTestingController, ProductService],
      (httpClient: HttpTestingController, productService: ProductService) => {

        //kreiranje lažnih podataka radi testa
        const Product = [ 
          {
            IId : 1,
            ItemName: 'AMD Ryzen 7 1700',
            Price: 286,
            Description: 'Solid processor',
            ImageUrl:
              'https://cdn.shopify.com/s/files/1/0250/3793/0580/products/1_d539c0ca-7985-4c86-b8db-847074480619_1024x1024@2x.png?v=1558174602',
            CategoryId: 2,
            InStock: 5,
            Quantity: 0,
            Total: 0,
          },
          {
            IId : 2,
            ItemName : 'IPhoneXS',
            Price : 30,
            Description : 'Solid phone',
            ImageUrl : 'https://cdn.shopify.com/s/files/1/0250/3793/0580/products/1_d539c0ca-7985-4c86-b8db-847074480619_1024x1024@2x.png?v=1558174602',
            CategoryId : 1,
            InStock : 5,
            Quantity : 0,
            Total : 0,
          }
        ];

        //servis koji sa get metodom dodeljuje vrednosti promenljivoj (products)
        productService.getProducts().subscribe((products: any) => { 
          expect(products.length).toBe(2);
        });

        //link preko kojeg se testira get metoda
        let req = httpMock.expectOne(
          'http://localhost:53103/api/ShoppingDetails' 
        ); 
        expect(req.request.method).toBe('GET');

        //prekidanje operacija nakon učitavanja podataka
        req.flush(Product); 
      }
    )
  ));
});
