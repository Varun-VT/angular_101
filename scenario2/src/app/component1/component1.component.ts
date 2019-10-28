import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <p> Welcome {{name}}</p>
  <p>Using 2 way Binding</p>
  <input [(ngModel)]= "newlyentered" type="text">{{newlyentered}}
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public newlyentered= ""
  public name="VARUN"
  constructor() { }

  ngOnInit() {
  }

}
