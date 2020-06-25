import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/svg/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/svg/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "googleplus",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/svg/google+.svg")
    );
  }

  ngOnInit(): void {
  }

}
