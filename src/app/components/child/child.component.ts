import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck {
  private counter = 0;
  constructor() {}

  ngDoCheck() {
    console.log(`Child DoCheck ${++this.counter}`);
  }

}
