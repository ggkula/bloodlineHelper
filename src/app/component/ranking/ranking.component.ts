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
  rankList: RankModal[] = rankList;
  dataList: EachData[] = dataList;
  rank: RankModal;
  rankId: number;
  openModal: boolean = false;
  selectedId: number;
  @Output() emitId = new EventEmitter<number>();

  constructor(
      private route: ActivatedRoute,
      private basicService : BasicService,
  ) { }

  ngOnInit() {
    this.rankId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.rank = this.rankList[this.rankId];
    this.rank.rank.forEach(((value, index) => {
      if(value.type === 'score' && value.detail.length === 0) {
        value.sorts.forEach((v) => {
          value.detail.push(this.dataList[v])
        })
      }
    }));
  }

  selectItem(id: number) {
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
}
