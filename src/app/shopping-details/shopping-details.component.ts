import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product';
import { Input } from 'hammerjs';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
 //styles:[]
})
export class ShoppingDetailsComponent implements OnInit {


  private cookieValue: any;
  ala = 'Cart'

  constructor(private cookieService: CookieService, 
    private prService: ProductService) { 
      prService.getProductsById(1)
    }

  ngOnInit(): void {
  
  }
}
