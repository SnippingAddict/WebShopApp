import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { Product } from 'src/app/shared/models/product';
import { ThemePalette } from '@angular/material/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() productItem: any;
  @Input('product') productName: string;

  constructor(
    private msg: MessengerService,
    private productSr: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    await this.handleSubscription();
  }

  @Input()
  color: ThemePalette = 'accent';

  handleSubscription() {
    this.msg.getMsgItem().subscribe((product: Product) => {
      this.productItem = product;
    });
  }

  handleAddToCart() {
    this.productSr.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      console.log(this.productItem);
    });
    let snackBarRef = this._snackBar.open('Product added', 'Close', {
      duration: 2000,
    });
  }
}
