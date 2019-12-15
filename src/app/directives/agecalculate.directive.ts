import { Directive,ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAgecalculate]'
})
export class AgecalculateDirective implements OnInit {
  @Input() name: string;
  constructor() { }
 ngOnInit() {
  console.log( this.name);
 }
}
