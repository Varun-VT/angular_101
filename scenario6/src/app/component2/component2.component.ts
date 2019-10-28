import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component2',
  template: `
  Enter Message
  <input type="text" #myId>
  <button (click)="printMeInComp3(myId.value)">event</button>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // value="demo";
  printMeInComp3(value){
    console.log("component2:",value);
    this.myEvent.emit(value);
  }
}
