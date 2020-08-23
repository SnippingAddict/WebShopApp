import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FrontPageComponent } from './navigation-pages/front-page/front-page.component';
import { CartComponent } from './shopping-details/cart/cart.component';
import { BrowseComponent } from './navigation-pages/browse/browse.component';
import { AboutUsComponent } from './navigation-pages/about-us/about-us.component';
import { ShoppingDetailItemComponent } from './shopping-details/shopping-detail-list/shopping-detail-item/shopping-detail-item.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: 'home',
    component: FrontPageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
      path: 'item-component',
      component: ShoppingDetailItemComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
