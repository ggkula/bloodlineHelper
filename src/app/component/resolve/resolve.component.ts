import { Component, OnInit, Input, OnChanges } from '@angular/core';
import resolve from '../../../data/data'
import { EachData } from '../../modal/dataModal'

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent implements OnInit {
  data: EachData[] = resolve;
  selectedCard: EachData;
  @Input() selectedId;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(value) {
    if(value.selectedId.currentValue) {
      this.selectedCard = this.data.filter(v => {
        return v.id === value.selectedId.currentValue
      })[0];
    }
  }
}
