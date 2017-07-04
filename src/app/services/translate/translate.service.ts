const dictionary = {
  ru: {
    'hello': 'привет',
    'bye': 'пока',
    'child': 'ребёнок'
  },
  ua: {
    'hello': 'привіт',
    'bye': 'бувай',
    'child': 'дитина'
  },
  en: {
    'hello': 'hello',
    'bye': 'bye',
    'child': 'child'
  }
};

export class TranslateService {

  private _currentLang: string;
  private _translations = {};

  constructor() {
    this.use(localStorage.getItem('currentLanguage') || 'en');
  }

  public setTranslations() {
    this._translations = dictionary[this._currentLang];
  }

  public use(lang: string): void {
    this._currentLang = lang;
    this.setTranslations();
    localStorage.setItem('currentLanguage', lang);
  }

  public translate(key: string): string {
    return this._translations[key] || key;
  }
}
