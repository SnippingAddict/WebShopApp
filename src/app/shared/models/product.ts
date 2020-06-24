import { HttpClient } from '@angular/common/http';
import { productsUrl } from 'src/app/config/api';
import { Cart } from './cart';
import { Observable } from 'rxjs';
import { Category } from './category';
import { ProductService } from '../services/product.service';
import { ThrowStmt } from '@angular/compiler';

export class Product {

  constructor(
    public Id?: number,
    public ItemName?: string,
    public Price?: number,
    public InStock?: number,
    public ImageUrl?: string,
    public ProductType?: number,
    public Description?: string,
    public Quantity?: number,
    public Total?: number,
    public Category?: Category,
    public Carts?: Cart
    ) { this.Quantity = 0;
      this.Id = Id,
      this.ItemName = ItemName;
      this.Price = Price,
      this.InStock = InStock,
      this.ImageUrl = ImageUrl,
      this.ProductType = ProductType,
      this.Description = Description
    
  }
}

export class CartItem {
  constructor(
    public name?: string,
    public price?: number,
    public total?: number,
    public quantity?: number,
    public subtotal?: number,
    public product?: Product
  ) {
    this.name = product.ItemName;
    this.price = product.Price;
  }
}
