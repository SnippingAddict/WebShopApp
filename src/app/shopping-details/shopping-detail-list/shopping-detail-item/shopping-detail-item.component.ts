import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { ShoppingDetailService } from 'src/app/shared/shopping-detail.service';
import { HttpClient } from '@angular/common/http';
import { productsUrl, cartUrl } from 'src/app/config/api';
import { ProductService } from 'src/app/shared/services/product.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-shopping-detail-item',
  templateUrl: './shopping-detail-item.component.html',
  styleUrls: ['./shopping-detail-item.component.css'],
})
export class ShoppingDetailItemComponent implements OnInit {
  @Input() productItem: any;
  @Input('product') productName: string;

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  nista = ""

  selectedProduct: Product;

  cartItem = { CartId: 1, ProductId: 1, Qty: 1 };

  broj = 1;
  productArray: string[];

  constructor(
    private msg: MessengerService,
    private cookieService: CookieService,
    private productSr: ProductService,
    public service: ShoppingDetailService,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private scroll: ViewportScroller

  ) {
    this.matIconRegistry.addSvgIcon("shopping-cart", this.domSanitizer.bypassSecurityTrustResourceUrl ("assets/images/svg/shopping-cart.svg"));
  }

  ngOnInit() {
    this.cookieService.delete('s');
  }

  setCookie() {
    this.cookieService.set('CartItem', JSON.stringify(this.productSr.product));
    this.cookieValue = this.cookieService.get('CartItem');
  }

  private cookieValue: any;
  ala = 'Cart';

  // handleAddToCart(productItem: Product) {
  //   this.service.formData = Object.assign({}, productItem);
  // }

  getProductsByIdd() {
    this.productSr.getProductsById(1);
  }

  opetItemDetails() {
    this.productSr.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendItem(this.productItem);
      console.log(this.productItem);
      this.scroll.scrollToPosition([0,0]);
    });
  }

  snackBarMsg = 'Product added';

  handleAddToCart() {
    this.productSr.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      this.msg.sendBr(this.productItem)
      console.log(this.productItem);
    });
    let snackBarRef = this._snackBar.open('Product added', 'Close', {
      duration: 2000,
    });
  }

  postCart() {
    return this.http.post(cartUrl, this.cartItem);
  }
}
