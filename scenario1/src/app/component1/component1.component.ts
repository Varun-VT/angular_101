import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component1',
  template: `
  <p> Welcome {{name}}</p>
  <input #myInput type="text">
  <button (click)="logMessage(myInput)">Log on terminal</button>
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  name="VARUN"
  constructor() { }

  logMessage(myInput){
    console.log(myInput.value)
  }
  ngOnInit() {
  }

}
