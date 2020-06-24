import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { Cart } from 'src/app/shared/models/cart';
import { ShoppingDetailService } from 'src/app/shared/shopping-detail.service';
import { HttpClient } from '@angular/common/http';
import { productsUrl, cartUrl } from 'src/app/config/api';
import { ProductService } from 'src/app/shared/services/product.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-shopping-detail-item',
  templateUrl: './shopping-detail-item.component.html',
  styleUrls: ['./shopping-detail-item.component.css']
})
export class ShoppingDetailItemComponent implements OnInit {

  @Input() productItem: any;

  selectedProduct: Product

  cartItem = {CartId: 1, ProductId: 1, Qty: 1};


  productArray: string[]

  constructor(private cartService: CartService,
              private msg: MessengerService,private cookieService: CookieService,
              private productSr: ProductService,
              public service: ShoppingDetailService,
              private http: HttpClient,
              private _snackBar: MatSnackBar) {
               }

  ngOnInit() {
    this.cookieService.delete('s')
  }

  setCookie() {
    this.cookieService.set('CartItem', JSON.stringify(this.productSr.product));
    this.cookieValue = this.cookieService.get('CartItem');
  }

  private cookieValue: any;
  ala = 'Cart'



  // handleAddToCart(productItem: Product) {
  //   this.service.formData = Object.assign({}, productItem);
  // }

  getProductsByIdd() {
    this.productSr.getProductsById(1)
  }

  snackBarMsg = "Product added"

   handleAddToCart() {
     this.productSr.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
    let snackBarRef = this._snackBar.open("Product added", 'Close', {
      duration: 2000
    });

  }

  postCart() {
    return this.http.post(cartUrl, this.cartItem)
  }
}

