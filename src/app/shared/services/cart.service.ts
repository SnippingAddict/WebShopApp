import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { cartUrl } from 'src/app/config/api';
import { map, flatMap, mergeMap  } from 'rxjs/operators';
import { productsUrl } from 'src/app/config/api';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { Repository } from '../models/repository';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  selections: Product[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;

  product: Product

  constructor(private http: HttpClient) {}

  
}

