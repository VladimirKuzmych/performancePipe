import { PerformanceTestingPage } from './app.po';

describe('performance-testing App', () => {
  let page: PerformanceTestingPage;

  beforeEach(() => {
    page = new PerformanceTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
