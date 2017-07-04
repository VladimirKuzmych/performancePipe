import { Component, DoCheck } from '@angular/core';
import { TranslateService } from './../../services/translate';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck {
  private counter = 0;
  constructor(private translateService: TranslateService) {}

  public translate(value) {
    return this.translateService.translate(value);
  }

  ngDoCheck() {
    console.log(`child ${++this.counter}`);
  }

}
