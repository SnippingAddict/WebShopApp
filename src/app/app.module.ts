import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { ShoppingDetailComponent } from './shopping-details/shopping-detail/shopping-detail.component';
import { ShoppingDetailListComponent } from './shopping-details/shopping-detail-list/shopping-detail-list.component';
import { ShoppingDetailService } from './shared/shopping-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { Injectable } from '@angular/core';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/browser/header/header.component';
import { FooterComponent } from './shared/browser/footer/footer.component';
import { NavComponent } from './shared/browser/nav/nav.component';
import { FiltersComponent } from './shopping-details/filters/filters.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartComponent } from './shopping-details/cart/cart.component';
import { MatInputModule } from '@angular/material/input';
import { CartItemComponent } from './shopping-details/cart/cart-item/cart-item.component';
import { MatListModule } from '@angular/material/list';
import { ShoppingDetailItemComponent } from './shopping-details/shopping-detail-list/shopping-detail-item/shopping-detail-item.component';
import { CartService } from './shared/services/cart.service';
import { Cart } from './shared/models/cart';
import { CookieService } from 'ngx-cookie-service';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './shared/pipes/product-filter.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import {MatDividerModule} from '@angular/material/divider';


@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // I will only use the swap gesture so
    // I will deactivate the others to avoid overlaps
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

const oktaConfig = {
  issuer: 'https://dev-745718.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/callback',
  clientId: '0oagr3dscmF9tvvLl4x6',
  scopes: ['openid', 'profile']
};

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingDetailsComponent,
    ShoppingDetailComponent,
    ShoppingDetailListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ShoppingDetailItemComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCarouselModule.forRoot(),
    HammerModule,
    IgxCarouselModule,
    CarouselModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    OktaAuthModule,
    RouterModule.forRoot(routes),
    MatDividerModule
  ],
  providers: [
    ShoppingDetailService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig,  },
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CartService,
    CookieService,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}

export class MatCarouselHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false },
  };
}