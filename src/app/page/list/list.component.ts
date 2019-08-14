import { Component, OnInit } from '@angular/core';
import rankList from "../../../data/rankList/rank";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  rankList = rankList;

  constructor() { }

  ngOnInit() {
  }

}
