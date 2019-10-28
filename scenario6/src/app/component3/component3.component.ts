import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component3',
  template: `
 
  <h1>{{parentData}}</h1>
  `,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

}
