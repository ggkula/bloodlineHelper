import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  card = [
    {
      name: '最新节奏榜',
      route: '/listDetail',
      color: '#DDC589',
      id: true
    },
    {
      name: '单卡评测',
      route: '/singleResolve',
      color: '#C3D886'
    },
    {
      name: '新手指引',
      route: '/newPlayer',
      color: '#B277BD'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
