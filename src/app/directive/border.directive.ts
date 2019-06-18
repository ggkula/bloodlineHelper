import {Directive, Input, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  @Input('appBorder') attr;

  @HostBinding('class.dark') dark: boolean = false;
  @HostBinding('class.light') light: boolean = false;
  @HostBinding('class.thunder') thunder: boolean = false;
  @HostBinding('class.tree') tree: boolean = false;
  @HostBinding('class.fire') fire: boolean = false;
  @HostBinding('class.water') water: boolean = false;

  constructor() { }

  ngOnInit() {
    switch (true) {
      case this.attr === 'dark':
        this.dark = true;
        break;
      case this.attr === 'light':
        this.light = true;
        break;
      case this.attr === 'thunder':
        this.thunder = true;
        break;
      case this.attr === 'tree':
        this.tree = true;
        break;
      case this.attr === 'fire':
        this.fire = true;
        break;
      case this.attr === 'water':
        this.water = true;
        break;
    }
  }
}
