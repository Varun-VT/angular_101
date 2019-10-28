import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <component2 (myEvent)="getMessage($event)"></component2>
  <component3 [parentData]="demo"></component3>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  // @Output() public childEvent;
  demo = "";
  constructor() { }

  ngOnInit() {
  }
  getMessage(value){
    // this.childEvent.emit(value);
    this.demo=value;
    console.log("component 1",value);

  }
}
