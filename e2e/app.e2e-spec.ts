import { AngularIteaPage } from './app.po';

describe('angular-itea App', () => {
  let page: AngularIteaPage;

  beforeEach(() => {
    page = new AngularIteaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
