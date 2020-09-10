import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitazer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'marvel-icon',
      this.domSanitazer.bypassSecurityTrustResourceUrl('assets/marvel-icon.svg')
    );
  }

  ngOnInit() {
  }

}
