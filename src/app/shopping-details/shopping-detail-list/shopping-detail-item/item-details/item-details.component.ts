import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/shared/services/messenger.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() productItem: any;
  @Input('product') productName: string;

  constructor(private msg: MessengerService) {}

  async ngOnInit() {
    await this.handleSubscription()
  }

  handleSubscription() {
    this.msg.getMsgItem().subscribe((product: Product) => {
      this.productItem = product;
    });
  }
}
