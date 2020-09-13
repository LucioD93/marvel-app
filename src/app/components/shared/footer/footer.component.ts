import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitazer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'm-logo',
      this.domSanitazer.bypassSecurityTrustResourceUrl('assets/m-logo.svg')
    );
  }

  ngOnInit() {
  }

}
