import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: any[], searchTerm: string): Product[] {
        if (!products || !searchTerm) {
            return products;
        }
        return products.filter(category => 
            category.Category.Categories.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}