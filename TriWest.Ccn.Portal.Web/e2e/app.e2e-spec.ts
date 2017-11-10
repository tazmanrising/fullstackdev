import { TriwestCcnPortalPage } from './app.po';

describe('triwest-ccn-portal App', () => {
  let page: TriwestCcnPortalPage;

  beforeEach(() => {
    page = new TriwestCcnPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
