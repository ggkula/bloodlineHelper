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
  @Input() id = 1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(value) {

  }
}
