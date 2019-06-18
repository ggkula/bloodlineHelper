import { Component, OnInit, DoCheck } from '@angular/core';
import {BasicService} from "../../server/basic.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  windowSize: boolean;

  constructor(
      private basicService : BasicService,
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.windowSize = this.basicService.browser.getValue();
  }

}
