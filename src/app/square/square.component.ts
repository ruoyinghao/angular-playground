import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{buttonvalue}}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() buttonvalue: 'X' | 'O' ;
  //rando = Math.random();

}
