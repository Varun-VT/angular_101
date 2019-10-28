import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <p> Welcome to Scenario 4</p>
  <input [(ngModel)]="childtxt" type="text">{{childtxt}}
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public childtxt=""

  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit(this.childtxt);
  }
}
