import { Component, OnInit, DoCheck } from '@angular/core';
import {BasicService} from "../../server/basic.service";

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  selectedId: number;
  windowSize: boolean;

  constructor(
      private basicService : BasicService,
  ) { }

  ngOnInit() {
  }

  getSelectedId($event) {
    this.selectedId = $event;
  }

  ngDoCheck() {
    this.windowSize = this.basicService.browser.getValue();
  }
}
