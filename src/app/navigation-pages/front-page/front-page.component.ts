import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private msg: MessengerService,
    private scroll: ViewportScroller
  ) {}

  switch = true;

  ngOnInit() {}

  browseSwitch() {
    this.msg.sendBrowse(this.switch);
    console.log(this.switch);
    this.scroll.scrollToPosition([0, 0]);
  }

  visible = false;

  changeToBrowse() {
    this.msg.sendChange(this.visible);
    this.scroll.scrollToPosition([0, 0]);
  }

  activateCategory(value: number, category: string) {
    if ((value = 1)) {
      this.msg.sendCategory(category);
      this.msg.sendChange(this.visible);
    } else if ((value = 2)) {
      this.msg.sendCategory(category);
      this.msg.sendChange(this.visible);
    } else if ((value = 3)) {
      this.msg.sendCategory(category);
      this.msg.sendChange(this.visible);
    }
    console.log(category);
    this.scroll.scrollToPosition([0, 0]);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
