import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl, cartUrl } from 'src/app/config/api';
import { Cart } from '../models/cart';
import { MessengerService } from './messenger.service';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Input() prCart: Product

  product: Product
  products: Product[]
  cartProduct: Product

  constructor(private http: HttpClient, private msg: MessengerService,
    ) { 
      this.getProductsById(1)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  getProductById(Id): Observable<Product> {
    return this.http.get<Product>(productsUrl + "/" + Id)
  }

  getProductsPaginator(event): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  getCategories(): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl)
  }

  addProductToCart(product: Product): Observable<Product> {
    return this.http.get<Product>(productsUrl);
  }

  //SendMsg salje vrednosti, getMsg upisuje unutar objekta, objekat ucitavamo i upisujemo unutar niza
  getCartItems(): Observable<Product[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<Product[]>(productsUrl).pipe(
      map((result: any[]) => {
        let productItems: Product[] = [];
        console.log(result)
        for (let item of result) {
          let productExists = false

          for (let i in productItems) {
            if (productItems[i].Id === item.product.Id) {
              productItems[i].Quantity++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            productItems.push(new Product(item.Id, item.product));
          }
        }

        return productItems;
      })
    );
  }


  getProductsById(Id: number) {
    return this.http.get<Product>(productsUrl + "/" + Id).subscribe(p => this.product = p)
    
  }
}
