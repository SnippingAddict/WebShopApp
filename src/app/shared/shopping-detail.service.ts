import { ShoppingDetail } from './shopping-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDetailService {
  private formData: Product;
  readonly rootURL = 'http://localhost:53103/api';
  private list : Product[];

  constructor(private http: HttpClient) { }

  private postShoppingDetail() {
    return this.http.post(this.rootURL + '/ShoppingDetails', this.formData);
  }
  private putShoppingDetail() {
    return this.http.put(this.rootURL + '/ShoppingDetails/'+ this.formData.Id, this.formData);
  }
  private deleteShoppingDetail(id) {
    return this.http.delete(this.rootURL + '/ShoppingDetails/'+ id);
  }
  private getShoppingDetail(id) {
    return this.http.get(this.rootURL + '/ShoppingDetails/' + id);
  }
  private gettShoppingDetail(){
    return this.http.get(this.rootURL + '/ShoppingDetails');
  }

  private refreshList(){
    this.http.get(this.rootURL + '/ShoppingDetails')
    .toPromise()
    .then(res => this.list = res as Product[]);
  }
}

