import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  @Output() emitId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectItem(id: number) {
    this.emitId.emit(id);
  }
}
