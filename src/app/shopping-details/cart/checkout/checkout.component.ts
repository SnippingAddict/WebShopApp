import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  checkoutState = false;

  constructor(public _formBuilder: FormBuilder, private msg: MessengerService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  checkoutPage() {
    this.msg.sendCheckoutTrue(this.checkoutState);
}

}
