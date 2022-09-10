import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{buttonvalue}}
    </button>
  `,
  styles: [
  ]
})
export class SquareComponent {
  @Input() buttonvalue: 'X' | 'O' ;
  //rando = Math.random();

}
