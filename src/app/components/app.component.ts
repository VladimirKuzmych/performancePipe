import { Component, DoCheck } from '@angular/core';
import { TranslateService } from './../services/translate';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements DoCheck{
  public hello = 'hello';
  public bye = 'bye';
  public langs = ['ua', 'en', 'ru'];
  private counter = 0;

  constructor(private translateService: TranslateService) {}

  public translate(value) {
    return this.translateService.translate(value);
  }

  public useLang(lang) {
    this.translateService.use(lang);
  }

  ngDoCheck() {
    console.log(++this.counter);
  }
}
