import { inject } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '../.';

describe('TranslatePipe', () => {
  it('create an instance', inject([TranslateService], (translateService) => {
    let pipe = new TranslatePipe(translateService);
    expect(pipe).toBeTruthy();
  }));
});
