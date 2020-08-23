import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  subject2 = new Subject()
  subject3 = new Subject()
  subject4 = new Subject()

  
  constructor() { }

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
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
