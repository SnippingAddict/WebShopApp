export class ShoppingDetail {
    IId : number;
    ItemName : string;
    Price : string;
    InStock : string;
    DateAndTime : string;
    CVV : string;

    constructor(IId, ItemName = '', Price, InStock , CVV , DateAndTime) {
    this.IId = IId
    this.ItemName = ItemName
    this.Price = Price
    this.InStock = InStock
    this.DateAndTime = DateAndTime
    this.CVV = CVV
  }
}
