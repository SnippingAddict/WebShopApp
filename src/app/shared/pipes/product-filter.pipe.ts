import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/product';
import {CommonModule} from "@angular/common";

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any, searchTerm: string, itemName: string) {
    if (products && products.length) {
      return products.filter((item) => {
        if (
          searchTerm &&
          item.Category.Categories.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1
        ) {
          return false;
        }
        else if (
          itemName &&
          item.ItemName.toLowerCase().indexOf(itemName.toLowerCase()) === -1
        ) {
          return false;
        }
        return true;
      });
    } else {
      return products;
    }
  }
}
