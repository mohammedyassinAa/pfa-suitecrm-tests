import { Given, When, Then } from '@cucumber/cucumber';
import { CreateAccountPage } from '../../pages/accounts/CreateAccountPage';
import { testAccount } from '../../models/accounts/accountModel';
import { CreateAccountObjects } from '../../objects/accounts/CreateAccountObjects';
import { CustomWorld } from '../../support/hooks';

let createAccountPage: CreateAccountPage;

Given('the user navigates to the create account page', async function (this: CustomWorld) {
    const objects = new CreateAccountObjects(this.page);
    createAccountPage = new CreateAccountPage(objects);
    await createAccountPage.navigateToCreateAccount();
});

When('the user fills in the account form', async function () {
    await createAccountPage.fillAndSubmitForm(
        testAccount.name,
        testAccount.website,
        testAccount.email
    );
});

Then('the new account should be created successfully', async function () {
    await createAccountPage.verifyAccountCreated(testAccount.name);
});
