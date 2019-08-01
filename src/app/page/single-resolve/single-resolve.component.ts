import { Component, OnInit, DoCheck } from '@angular/core';
import {BasicService} from "../../server/basic.service";
import dataList from '../../../data/data'
import {EachData} from "../../modal/dataModal";

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

  dataList: EachData[] = dataList;
  openModal: boolean;
  width: number;
  selectedId: number;

  constructor(
      private basicService : BasicService,
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.windowSize = this.basicService.browser.getValue();
    this.width = Math.floor(window.innerWidth / 80)
  }

  selectItem(id: number) {
    this.openModal = true;
    this.selectedId = id;
  }

  closeModalFunc() {
    this.openModal = false;
  }

  filter() {
    // console.log(this.attr, this.job, this.camp)
    this.dataList = dataList.filter(value => {
      if (this.attr) {
        return value.attr.key === this.attr
      } else {
        return value
      }
    }).filter(value => {
      if (this.job) {
        return value.job === this.job
      } else {
        return value
      }
    }).filter(value => {
      if (this.camp) {
        return value.camp === this.camp
      } else {
        return value
      }
    })
  }

  clearAll() {
    this.dataList = dataList;
    this.attr = undefined;
    this.job = undefined;
    this.camp = undefined;
    console.log(this.attr, this.job, this.camp);
  }
}
