import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css'],
})
export class BrowseItemComponent implements OnInit {
  @Input() productItem: Product;
  @Input() productItem2: Product;
  @Input() productItem3: Product;
  @Input('product') productName: string;

  @Input() productList: Product[] = [];
  product: any;

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private productService: ProductService,
    private msg: MessengerService,
    private scroll: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.loadProductById(1);
    this.loadProductById2(2);
    this.loadProductById3(3);
  }


  
  loadProductById(id) {
    this.productService.getProductById(id).subscribe((productId) => {
      this.productItem = productId;
    });
  }

  loadProductById2(id) {
    this.productService.getProductById(id).subscribe((productId) => {
      this.productItem2 = productId;
    });
  }

  loadProductById3(id) {
    this.productService.getProductById(id).subscribe((productId) => {
      this.productItem3 = productId;
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  opetItemDetails() {
    this.productService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendItem(this.productItem);
      console.log(this.productItem);
      this.scroll.scrollToPosition([0,0]);
    });
  }

  opetItemDetails2() {
    this.productService.addProductToCart(this.productItem2).subscribe(() => {
      this.msg.sendItem(this.productItem2);
      console.log(this.productItem);
      this.scroll.scrollToPosition([0,0]);
    });
  }

  opetItemDetails3() {
    this.productService.addProductToCart(this.productItem3).subscribe(() => {
      this.msg.sendItem(this.productItem3);
      console.log(this.productItem);
      this.scroll.scrollToPosition([0,0]);
    });
  }
}
