import { Product } from './product';
import { Injectable } from '@angular/core';

export class Cart {

  public Id?: number
  public ProductId?: Number
  public Qty?: number

  constructor(CartId: number, product: Product, Qty = 0) {
      this.ProductId = product.Id
      this.Qty = Qty;
      this.Id = CartId
    }
}
