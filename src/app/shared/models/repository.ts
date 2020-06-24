import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';

export class Repository {
    product: Product
    products: Product[]

    constructor(private http: HttpClient) {
        this.getProducts()
        this.getProduct(1);
    }

    getProduct(id: number) {
        this.http.get<Product>(productsUrl + "/" + id)
            .subscribe(p => this.product = p);
    }

    getProducts() {
        return this.http.get<Product[]>(productsUrl)
        .subscribe(p => this.products = p);
      }
}
