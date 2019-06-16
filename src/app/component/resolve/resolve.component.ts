import { Component, OnInit, Input, OnChanges } from '@angular/core';
import resolve from '../../../data/data'

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent implements OnInit {
  data = resolve;
  selectedCard;
  @Input() selectedId;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(value) {
    console.log(value.selectedId);
    if(value.selectedId.currentValue) {
      this.selectedCard = resolve[value.selectedId.currentValue];
      console.log(value.selectedId.currentValue, this.selectedCard);
    }
  }
}
