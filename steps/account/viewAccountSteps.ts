import { Given, Then } from '@cucumber/cucumber';
import { ViewAccountsPage } from '../../pages/accounts/ViewAccountsPage';
import { CustomWorld } from '../../support/hooks';

let viewAccountsPage: ViewAccountsPage;

Given('the user navigates to the view accounts page', async function (this: CustomWorld) {
    viewAccountsPage = new ViewAccountsPage(this.page);
    await viewAccountsPage.navigateToViewAccounts();
});

Then('the list of accounts should be visible', async function () {
    await viewAccountsPage.verifyAccountsVisible();
});
