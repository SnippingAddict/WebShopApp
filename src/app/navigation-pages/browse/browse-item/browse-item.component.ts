import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css'],
})
export class BrowseItemComponent implements OnInit {
  
  @Input() productItem: Product;
  @Input('product') productName: string;

  @Input() productList: Product[] = [];
  product: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadProductById(1);
  }

  loadProductById(id) {
    this.productService.getProductById(id).subscribe((productId) => {
      this.productItem = productId;
    })
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
