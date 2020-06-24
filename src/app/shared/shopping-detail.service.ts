import { ShoppingDetail } from './shopping-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product';
import { Cart } from './models/cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDetailService {
  formData: Product;
  form2Data: Cart;
  readonly rootURL = 'http://localhost:53103/api';
  list : Product[];

  constructor(private http: HttpClient) { }

  postShoppingDetail() {
    return this.http.post(this.rootURL + '/ShoppingDetails', this.formData);
  }
  putShoppingDetail() {
    return this.http.put(this.rootURL + '/ShoppingDetails/'+ this.formData.Id, this.formData);
  }
  deleteShoppingDetail(id) {
    return this.http.delete(this.rootURL + '/ShoppingDetails/'+ id);
  }
  getShoppingDetail(id) {
    return this.http.get(this.rootURL + '/ShoppingDetails/' + id);
  }
  gettShoppingDetail(){
    return this.http.get(this.rootURL + '/ShoppingDetails');
  }

  refreshList(){
    this.http.get(this.rootURL + '/ShoppingDetails')
    .toPromise()
    .then(res => this.list = res as Product[]);
  }
}

