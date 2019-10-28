import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <p> Welcome to Scenario 3</p>
  <h2>{{"Hello "+textfromparent}}</h2>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
