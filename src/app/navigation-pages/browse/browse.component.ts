import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { ProductFilterPipe } from 'src/app/shared/pipes/product-filter.pipe';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { EaseInOut } from 'igniteui-angular/lib/animations/easings';
import { MAT_SORT_HEADER_INTL_PROVIDER_FACTORY } from '@angular/material/sort';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  @Input() productItem: Product;
  @Input() productList: Product[] = [];
  product: any;
  itemName: string;

  @Input('aria-label')
  ariaLabel: string;

  @Input('aria-describedby')
  ariaDescribedby: string;

  @Input()
  checked: boolean;

  filter = { CategoryId: false, laptop: false, processor: false };

  filterChange() {
    this.productList = this.product.filter(
      (x) =>
        (x.CategoryId === '1' && this.filter.CategoryId) ||
        (x.CategoryId === 'laptop' && this.filter.laptop) ||
        (x.CategoryId === 'processor' && this.filter.processor)
    );
  }

  length = 100;
  pageSize = 6;
  pageSizeOptions: number[] = [6, 12, 24];
  pageIndex = 0;
  @Input() searchTerm: string;
  categories = new FormControl();
  categoryList: Product[] = [];

  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  price: any;

  @Input() term: string;
  @Input() term2: string;
  @Input() term3: string;
  @Input() term4: string;
  @Input() term5: string;
  @Input() term6: string;
  @Input() isChecked: string;
  @Input('disabled')
  isDisabled: boolean;
  isTrue: boolean;
  category: string;

  constructor(
    private productService: ProductService,
    private msg: MessengerService
  ) {}

  ngOnInit() {
    this.loadCategory();
    this.getSearch();
    console.log(this.productList);
    this.productList = this.productList.sort(
      (low, high) => low.Price - high.Price
    );
    console.log(this.sort);
  }

  ngAfterViewInit() {
    this.loadProducts();
  }

  name = false;
  high = false;
  low = false;
  first = true;

  @Input() productList2: Product[] = [];
  @Input() productList3: Product[] = [];
  @Input() productList4: Product[] = [];

  sort(event: any) {
    switch (event.value) {
      case 'Low': {
        this.productList.sort((low, high) => low.Price - high.Price);

        this.productList2 = this.productList;
        this.productList2 = this.product;

        this.name = false;
        this.high = false;
        this.low = true;
        this.first = false;

        console.log(this.productList);
        break;
      }

      case 'High': {
        this.productList = this.productList.sort(
          (low, high) => high.Price - low.Price
        );

        this.productList4 = this.productList;
        this.productList4 = this.product;

        this.name = false;
        this.high = true;
        this.low = false;
        this.first = false;

        console.log(this.productList);
        break;
      }

      case 'ItemName': {
        this.productList = this.productList.sort(function (low, high) {
          if (low.ItemName < high.ItemName) {
            return -1;
          } else if (low.ItemName > high.ItemName) {
            return 1;
          } else {
            return 0;
          }
        });

        this.productList3 = this.productList;
        this.productList3 = this.product;


        this.name = true;
        this.high = false;
        this.low = false;
        this.first = false;

        console.log(this.productList);

        break;
      }

      default: {
        this.productList = this.productList.sort(
          (low, high) => low.Price - high.Price
        );
        break;
      }
    }
    return this.productList;
  }

  checkMe: string;

  getSearch() {
    this.msg.getSearch().subscribe((search: string) => {
      this.itemName = search;
    });
  }

  loadCategory() {
    this.msg.getCategory().subscribe((category: string) => {
      this.searchTerm = category;
      this.checkMe = category;
      console.log(this.category);
    });
  }

  checkValue(event: any) {
    this.searchTerm = event;
    console.log(event);
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(this.productList);
      this.product = products;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
      this.onPageChange(this.product);
    }
  }

  onPageChange($event) {
    if ((this.first = true)) {
      
      this.productList2 = []
      this.productList3 = []
      this.productList4 = []

      

      this.productList = this.product.slice(
        $event.pageIndex * $event.pageSize,
        $event.pageIndex * $event.pageSize + $event.pageSize
      );
    } else if ((this.high = true)) {

      this.productList = []
      this.productList2 = []
      this.productList3 = []

      this.productList4 = this.product.slice(
        $event.pageIndex * $event.pageSize,
        $event.pageIndex * $event.pageSize + $event.pageSize
      );
    } else if ((this.low = true)) {

      this.productList = []
      this.productList3 = []
      this.productList4 = []

      this.productList2 = this.product.slice(
        $event.pageIndex * $event.pageSize,
        $event.pageIndex * $event.pageSize + $event.pageSize
      );
    } else if ((this.name = true)) {

      this.productList2 = []
      this.productList = []
      this.productList4 = []

      this.productList3 = this.product.slice(
        $event.pageIndex * $event.pageSize,
        $event.pageIndex * $event.pageSize + $event.pageSize
      );
    }
  }

  pageEvent: PageEvent;
}
