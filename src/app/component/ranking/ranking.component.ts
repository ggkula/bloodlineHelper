import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RankModal} from "../../modal/rankModal";
import {EachData} from '../../modal/dataModal'
import rankList from "../../../data/rankList/rank";
import dataList from '../../../data/data'
import {ActivatedRoute} from "@angular/router";
import {BasicService} from "../../server/basic.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  rankList: RankModal[] = rankList; // 节奏榜总表
  dataList: EachData[] = dataList;  // 数据总表
  rank: RankModal | null;  // 当月节奏榜
  rankId: number;  // 节奏榜id（当月id）
  openModal: boolean = false; // 弹窗开关
  selectedId: number; // 选中的单卡id
  maxWidth: number = 0; // 本月节奏榜最长的行的头像的个数
  @Output() emitId = new EventEmitter<number>();

  constructor(
      private route: ActivatedRoute,
      private basicService : BasicService,
  ) { }

  ngOnInit() {
    this.rankId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.changeRank();
  }

  selectItem(id: number) {
    console.log(id)
    if (this.basicService.browser.getValue()) {
      this.emitId.emit(id);
    } else {
      this.selectedId = id;
      this.openModal = true;
    }
  }

  closeModalFunc() {
    this.openModal = false;
  }

  changeRank() {
    this.rank = this.rankList[this.rankId];
    this.rank.rank.forEach(((value, index) => {
      if(value.type === 'score') {
        value.detail = [];
        value.sorts.forEach((v) => {
          value.detail.push(this.dataList[v])
        });
        if(value.sorts.length > this.maxWidth) {
          this.maxWidth = value.sorts.length;
        }
      }
    }));
  }
}
