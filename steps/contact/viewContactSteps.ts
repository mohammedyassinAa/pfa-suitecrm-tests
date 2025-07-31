import { Given, Then } from '@cucumber/cucumber';
import { ViewContactPage } from '../../pages/contact/ViewContactPage';
import { CustomWorld } from '../../support/hooks';

let viewContactPage: ViewContactPage;


Given('the user navigates to the view contacts page', async function (this: CustomWorld) {
  viewContactPage = new ViewContactPage(this.page);
  await viewContactPage.navigateToViewContacts();
});

Then('the list of contacts should be visible', async function () {
  await viewContactPage.verifyContactsVisible();
});
