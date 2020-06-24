import { Component, OnInit } from '@angular/core';
import { ShoppingDetailService } from 'src/app/shared/shopping-detail.service';
import { NgForm} from '@angular/forms';
import { Product } from 'src/app/shared/models/product';



@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: []
})
export class ShoppingDetailComponent implements OnInit {

  constructor(public service:ShoppingDetailService, private product: Product) { }

  ngOnInit() {
    // this.resetForm();
  }
  
  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  //   this.service.formData = {
  //     IId: 0,
  //     ItemName: '',
  //     Price: 0,
  //     InStock: 0,
  //     DateAndTime: '',
  //     ProductType: '',
  //     ImageUrl: '',

  //   }
    
  // } 
  
  // onSubmit(form: NgForm) {
  //   if (this.service.formData.IId == 0)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  // insertRecord(form: NgForm) {
  //   this.service.postShoppingDetail().subscribe(
  //     res => {
  //       debugger;
  //       this.resetForm(form);
  //       this.service.refreshList();
  //     },
  //     err => {
  //       debugger;
  //       console.log(err);
  //     }
  //   )
  // }
  // updateRecord(form: NgForm) {
  //   this.service.putShoppingDetail().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
