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
    },
    // {
    //   name: '更新列表',
    //   route: '/updateInfoList',
    //   color: '#9283E5'
    // }
  ];
  news = [
      '节奏榜列表页可用啦！快去点击查看历史版本的节奏榜吧！\n※历史版本节奏榜数据仍然在录入中',
      '更新说明：首页新增新闻轮播；节奏榜列表页开放；节奏榜详情页增加快速切换节奏榜版本按钮',
      '圆桌数据站招募写手！写出你的单卡评测然后投稿给我们吧！\n\n\n联系方式：\nQQ: 335631892\nQQ群：627969179'
  ]
  constructor() { }

  ngOnInit() {
  }

}
