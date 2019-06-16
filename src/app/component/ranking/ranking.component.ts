import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RankModal} from "../../modal/rankModal";
import rankList from "../../../data/rankList/rank";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  rankList: RankModal[] = rankList;
  rank: RankModal;
  rankId: number;
  @Output() emitId = new EventEmitter<number>();

  constructor(
      private route: ActivatedRoute,
  ) {
    this.rankId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.rank = this.rankList[this.rankId];
    console.log(this.rank);
  }

  ngOnInit() {
  }

  selectItem(id: number) {
    this.emitId.emit(id);
  }
}
