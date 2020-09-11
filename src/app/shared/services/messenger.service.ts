import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private subject = new Subject()
  private subject2 = new Subject()
  private subject3 = new Subject()
  private subject4 = new Subject()
  private subject5 = new Subject()
  private subject6 = new Subject()
  private subject7 = new Subject()
  private subject8 = new Subject()
  
  private category = new Subject()
  private search = new Subject()

  constructor() { }

  sendChange(promena) {
    this.subject8.next(promena)
  }

  getChange() {
    return this.subject8.asObservable()
  }

  sendCategory(category) {
    this.category.next(category)
  }

  getCategory() {
    return this.category.asObservable()
  }

  sendSearch(search) {
    this.search.next(search)
  }

  getSearch() {
    return this.search.asObservable()
  }

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
  }

  sendBr(broj) {
    this.subject5.next(broj)
  }
   
  getBr() {
    return this.subject5.asObservable()
  }

  sendMinus(item) {
    this.subject7.next(item)
  }

  getMinus() {
    return this.subject7.asObservable()
  }

  sendItem(product) {
    this.subject2.next(product)
  }

  sendIsAutenticated(isAuthenticated) {
    this.subject3.next(isAuthenticated)
  }

  sendCheckoutTrue(brPromene) {
    this.subject4.next(brPromene)
  }

  sendBrowse(brPromene) {
    this.subject6.next(brPromene)
  }

  getBrowse() {
    return this.subject6.asObservable()
  }

  getIsAuthenticated() {
    return this.subject3.asObservable()
  }

  getCheckoutTrue() {
    return this.subject4.asObservable()
  }

  getMsgItem() {
    return this.subject2.asObservable()
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
