import { LearnAPage } from './app.po';

describe('learn-a App', function() {
  let page: LearnAPage;

  beforeEach(() => {
    page = new LearnAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
