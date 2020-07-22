import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inapp',
  templateUrl: './inapp.component.html',
  styleUrls: ['./inapp.component.scss'],
})
export class InappComponent implements OnInit {
  @Input() icono: string;
  @Input() url: string;
  @Input() tipo: boolean;
  constructor(private browser: InAppBrowser) { }

  ngOnInit() {}

  openUrl(){
    console.log(this.tipo);
    if (this.tipo === true) {
      this.browser.create(this.url, '_self');
    }
    else {
      this.browser.create(this.url);
    }
  }
}
