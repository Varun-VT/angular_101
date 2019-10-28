import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  template:
  `<p> Welcome {{name}}</p>
  <p> {{greetuser()}}</p>
  <h2 [class]="bindclasex"> {{siteurl}}</h2>   
  <input [id]="myId" type="text" value="bhar do bhai">
  <p [class.text-danger]= "hasError">Danger here ==></p>
  <h2 [ngClass]="messageClasses">This too shall change </h2>
  <h1 [style.color]= "'orange'">Using style binding, css property</h1>
  <h1 [style.color]= "hasError ? 'red' : 'green'">Conditional Style Binding</h1> 
  <h3 [style.color]=  "highlightColor">Color based on user interaction</h3>
  <h2 [ngStyle]= "titleStyles">Multiple Styles applied</h2>
  <button (click)="onClick($event)">Greet</button>
  {{greet}}
  <input #myInput type="text">
  <button (click)="logMessage(myInput)">Log</button>
  <input [(ngModel)]= "newlyentered" type="text">{{newlyentered}}Using 2 way Binding
  
  <h2 *ngIf= "isDisplayed, else elseBlock">Using nglf directive to show or hide</h2>
  <ng-template #elseBlock> 
  <h2>nglf directive is hidden</h2>
  </ng-template>

  <div *ngIf="true; then thenblock; else elseBlock"></div>
  <ng-template #thenblock> 
  <h2>Inside thenblock</h2>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchDefault>You picked no color</div>
  </div>

  <h2>Using for loop</h2>
  <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o">
    <h2>{{o}} {{f}} {{l}} {{i}} {{color}}</h2>
  </div>

  <h2>{{"Hello"+ name}}</h2>
  
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style: italic;
    }`]
})
export class TestComponent implements OnInit {

  @Output() public childEvent = new EventEmitter()

  @Input('parentData') public name

  public colors=["red", "blue", "green", "yellow"];
  public color= "red"
  public isDisplayed= false
  public newlyentered=""
  public highlightColor;
  public hasError= true;
  public bindclasex= "text-success"
  public myId= "testId";
  public siteurl= window.location.href;
  public myname ="Varun"
  public isSpecial= true;
  public greet=""
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }
  public titleStyles= {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log("Welcome"+ " "+this.name)
    console.log(event)
    this.greet= event.type
  }
  logMessage(event) {
    console.log(event)
  }

  fireEvent(){
    this.childEvent.emit('Hey from child class');
  }
  greetuser(){
    return "Greetings " + this.name
  }
}
