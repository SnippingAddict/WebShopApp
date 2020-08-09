import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ShoppingDetailService } from 'src/app/shared/shopping-detail.service';
import { ShoppingDetail } from 'src/app/shared/shopping-detail.model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {
  MatCarouselSlide,
  MatCarouselSlideComponent,
} from '@ngmodule/material-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-shopping-detail-list',
  templateUrl: './shopping-detail-list.component.html',
  styleUrls: ['./shopping-detail-list.component.css'],
})
export class ShoppingDetailListComponent implements OnInit {
  @Input() productItem: Product;
  productList: Product[] = [];
  product: any;
  searchTerm: string;

  @Input()
  color: ThemePalette = "accent";


  constructor(
    public service: ShoppingDetailService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private productService: ProductService
  ) {
    this.matIconRegistry.addSvgIcon(
      'shopping-cart',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/svg/shopping-cart.svg'
      )
    );
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      this.categoryList = products;
    });
  }

  categories = new FormControl();
  categoryList: Product[] = [];
}
