import { Component, OnInit, Input } from '@angular/core';
import {Skill} from "../../modal/dataModal";

@Component({
  selector: 'app-skill-board',
  templateUrl: './skill-board.component.html',
  styleUrls: ['./skill-board.component.scss']
})
export class SkillBoardComponent implements OnInit {
  @Input() skill: Skill

  constructor() { }

  ngOnInit() {
  }

}
