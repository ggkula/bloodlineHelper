import { Component } from '@angular/core';
import { BasicService} from "./server/basic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blHelper';
  constructor(
      private basicService : BasicService,
  ) {
    window.innerWidth > 500 ? this.basicService.browser.next(true) : this.basicService.browser.next(false);
  }
}
