import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product, CartItem } from 'src/app/shared/models/product';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';
import { CookieService } from 'ngx-cookie-service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

export interface CartItems {
  product: string;
  price: number;
  quantity: 1;
  total: number;
  subtotal: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() productItems: any;

  @Input() cartItems: Product[] = [];

  @Input() products: Product;
  @Input() product: Product;
  private cookieValue: any;
  @Input() cartSubtotal = 0;

  brPromene = true;
  broj = 1;
  isAuthenticated: any;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    public productSr: ProductService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    public oktaAuth: OktaAuthService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    // if (this.transactions !== [0]) {
    //   this.transactions = JSON.parse(localStorage.getItem('Array'));
    // }
    console.log(this.brPromene);

    console.log(this.transactions);
  }

  checkAuth() {}

  checkoutPage() {
    this.msg.sendIsAutenticated(this.brPromene);
  }

  setCookie() {
    this.cookieValue = this.cookieService.get('Array');
  }

  @Input() total: number;

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      if (
        this.transactions.find((test) => test.ItemName === product.ItemName) ===
        undefined
      ) {
        this.transactions.push(product);
      }
      this.products = product;
      this.product = product;
      if (this.products.Quantity < this.product.InStock) {
        this.products.Quantity++;
        this.products.Total = this.products.Quantity * this.products.Price;
        console.log(this.total);
      } else {
        console.log('There are no more in stock !');
      }
      // localStorage.setItem('Array', JSON.stringify(this.transactions))
    });
  }

  addQuantity(item: Product) {
    if (item.Quantity < item.InStock) {
      item.Quantity++;
      item.Total = item.Quantity * item.Price;
    } else {
      console.log('There are no more in stock !');
    }
  }

  removeQuantity(item: Product) {
    if (item.Quantity > 1) {
      item.Quantity--;
      item.Total = item.Price * item.Quantity;
    }
  }

  deleteMsg(item: Product) {
    this.msg.sendMinus(this.product);
    if (item.Quantity == 1) {
      const index: number = this.transactions.indexOf(item);
      if (index !== -1) {
        this.transactions.splice(index, 1);
        item.Quantity--;
      }
    } else {
      const index: number = this.transactions.indexOf(item);
      this.transactions.splice(index, 1);
      item.Quantity = 0;
      item.Total = item.Price * item.Quantity;
    }
  }

  displayedColumns: string[] = ['ItemName', 'Price'];
  transactions: any[] = [];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.Price * t.Quantity)
      .reduce((acc, value) => acc + value, 0);
  }
}
