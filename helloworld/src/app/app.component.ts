import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //selector is a custom HTML tag that can be used to represent concerned component. AppComponent in this case
  templateUrl: './app.component.html', //templateurl points to a file that represents a view for HTML 
  styleUrls: ['./app.component.css']  //we can have styles that apply only to this component
})
export class AppComponent {
  title = 'helloworld';
}
