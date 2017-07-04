import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TranslateService } from 'app/services/translate'

import { AppComponent } from './components/app.component';
import { ChildComponent } from './components/child/child.component';

import { TranslatePipe } from './pipes/translate';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
