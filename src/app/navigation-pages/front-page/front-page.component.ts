import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    animateOut: 'fadeOut',
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
