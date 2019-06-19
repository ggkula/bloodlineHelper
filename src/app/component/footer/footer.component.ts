import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }

}
