import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  selectedId: number;

  constructor() { }

  ngOnInit() {
  }

  getSelectedId($event) {
    this.selectedId = $event;
  }

}