import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <h2>Scenario 5</h2>
  <component2 (middleEvent)="message=$event"></component2>
  <h2>{{message}}</h2>
  `,
  styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit {

  public message = "";
  constructor() { }

  ngOnInit() {
  }

}
