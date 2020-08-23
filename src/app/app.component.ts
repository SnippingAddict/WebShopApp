import { Component, OnInit, Input } from '@angular/core';
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
  isAuthenticatedFalse = false;
  @Input() searchTerm: string;

  broj: number;
  @Input() product: Product;
  show: boolean;
  producut: any;

  brPromene: boolean;

  isVisibleItemDetails = true;
  isVisibleCart = true;
  isVisibleFrontPage = true;
  isVisibleAboutUs = false;
  isVisibleBrowse = true;
  isVisibleCheckout = false;

  constructor(
    public oktaAuth: OktaAuthService,
    private msg: MessengerService
  ) {}

  ngOnInit() {
    this.isVisibleFrontPage = true;
    this.itemNumber();
    this.broj = 0;
    this.show = false;
    this.handleSubscription();
    if (this.product != undefined) {
      this.toggleItemDetails();
    }
    this.toggleCheckout();
    console.log(this.brPromene);
    this.toggleCheckout();
    this.toggleCheckoutBrowse()
    this.logino();
  }

  async logino() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  testAuth() {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
    this.msg.sendIsAutenticated(this.isAuthenticatedFalse);
    console.log(this.isAuthenticatedFalse);
  }

  msgAuthenticated() {}

  login() {
    this.oktaAuth.loginRedirect('/');
  }

  logout() {
    this.oktaAuth.logout('/');
  }

  itemNumber() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.broj++;
      console.log(this.broj);
      if (this.broj > 0) {
        this.show = true;
      } else if ((this.broj = 0)) {
        this.show = false;
      }
    });
  }

  handleSubscription() {
    this.msg.getMsgItem().subscribe((product: Product) => {
      this.product = product;
      this.toggleItemDetails();
    });
  }

  toggleCheckoutBrowse() {
    this.msg.getCheckoutTrue().subscribe((promena: any) => {
      this.isVisibleBrowse = promena;
      this.isVisibleCheckout = false;
    })
  }

  toggleCheckout() {
    this.msg.getIsAuthenticated().subscribe((promena: any) => {
      this.isVisibleCheckout = promena
      console.log(this.isVisibleCheckout)
      this.isVisibleCart = true;
    });
  }

  toggleItemDetails() {
    if (this.product != undefined) {
      this.isVisibleCart = true;
      this.isVisibleFrontPage = false;
      this.isVisibleAboutUs = false;
      this.isVisibleBrowse = true;
      this.isVisibleItemDetails = false;
    }
  }

  toggleCart() {
    this.isVisibleCart = false;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = true;
    this.isVisibleItemDetails = true;
  }

  toggleHome() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = true;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = true;
    this.isVisibleItemDetails = true;
  }

  toggleBrowse() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = false;
    this.isVisibleBrowse = false;
    this.isVisibleItemDetails = true;
  }

  toggleAboutUs() {
    this.isVisibleCart = true;
    this.isVisibleFrontPage = false;
    this.isVisibleAboutUs = true;
    this.isVisibleBrowse = true;
    this.isVisibleItemDetails = true;
  }
}
