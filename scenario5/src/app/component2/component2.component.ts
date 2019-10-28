import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component2',
  template: `
  <component3 (childEvent)="getMessage($event)"></component3>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public middleEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getMessage(value){
    this.middleEvent.emit(value);
  }
}
