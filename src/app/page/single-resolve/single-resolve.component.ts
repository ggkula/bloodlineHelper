import { Component, OnInit, DoCheck } from '@angular/core';
import {BasicService} from "../../server/basic.service";

@Component({
  selector: 'app-single-resolve',
  templateUrl: './single-resolve.component.html',
  styleUrls: ['./single-resolve.component.scss']
})
export class SingleResolveComponent implements OnInit {
  attr;
  job;
  camp;
  attrList = [{
    key: 'light',
    value: '光'
  },{
    key: 'dark',
    value: '暗'
  },{
    key: 'thunder',
    value: '雷'
  },{
    key: 'fire',
    value: '火'
  },{
    key: 'tree',
    value: '木'
  },{
    key: 'water',
    value: '水'
  },];
  jobList = ['战士', '法师', '射手', '刺客', '牧师'];
  campList = ['法塔', '圣地', '异族', '旅人', '异世界'];
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
