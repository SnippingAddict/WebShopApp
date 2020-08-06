import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { MessengerService } from './shared/services/messenger.service';
import { Product } from './shared/models/product';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WebShopApp';
  isAuthenticated: boolean;

  broj: number;
  product: Product
  show: boolean;

  isVisibleCart = true;
  isVisibleFrontPage = true;
  isVisibleAboutUs = false;
  isVisibleBrowse = true;

  constructor(public oktaAuth: OktaAuthService, private msg: MessengerService) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
    this.isVisibleFrontPage = true;
    this.itemNumber();
    this.broj = 0
    this.show = false;
  }

  itemNumber() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.broj++
      console.log(this.broj)
      if (this.broj > 0) {
        this.show = true;
      } else if (this.broj = 0) {
        this.show = false;
      }
    })
  }

  toggleCart() {
    this.isVisibleCart = false;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = true;
  }

  toggleHome() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = true;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = true;
  }

  toggleBrowse() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = false;
  }

  toggleAboutUs() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = true;
    this.isVisibleBrowse = true;
  }
}
