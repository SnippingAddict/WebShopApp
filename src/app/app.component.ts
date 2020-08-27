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

  @Input()
  multi: boolean;

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
    console.log(this.msg.getBr());
    this.handleSubscription();
    if (this.product != undefined) {
      this.toggleItemDetails();
    }
    this.toggleCheckout();
    console.log(this.brPromene);
    this.toggleCheckout();
    this.toggleCheckoutBrowse();
    this.logino();
    this.itemMinus();
    this.toggleShopNow();
  }

  async logino() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.msg.sendSearch(this.searchTerm);
      this.isVisibleBrowse = false;
      this.isVisibleFrontPage = false;
      console.log(this.searchTerm);
      console.log(event);
    }
  }

  activateCategory(value: number, category: string) {
    if ((value = 1)) {
      this.msg.sendCategory(category);
      this.isVisibleBrowse = false;
      this.isVisibleFrontPage = false;
    } else if ((value = 2)) {
      this.msg.sendCategory(category);
    } else if ((value = 3)) {
      this.msg.sendCategory(category);
    } else if ((value = 4)) {
      this.msg.sendCategory(category);
    } else if ((value = 5)) {
      this.msg.sendCategory(category);
    }
    console.log(category);
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

  itemMinus() {
    this.msg.getMinus().subscribe((product: any) => {
      this.broj--;
      console.log(this.broj);
    });
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

  toggleShopNow() {
    this.msg.getBrowse().subscribe((promena: any) => {
      this.isVisibleBrowse = false;
      this.isVisibleFrontPage = false;
    });
  }

  toggleCheckoutBrowse() {
    this.msg.getCheckoutTrue().subscribe((promena: any) => {
      this.isVisibleBrowse = promena;
      this.isVisibleCheckout = false;
    });
  }

  toggleCheckout() {
    this.msg.getIsAuthenticated().subscribe((promena: any) => {
      this.isVisibleCheckout = promena;
      console.log(this.isVisibleCheckout);
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
