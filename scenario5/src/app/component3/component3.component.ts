import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'component3',
  template: `
  <p> Welcome to Scenario 5</p>
  <input [(ngModel)]="childtxt" type="text">{{childtxt}}
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() public childEvent = new EventEmitter()

  public childtxt=""
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit(this.childtxt);
  }
}
