import { Given, When, Then } from '@cucumber/cucumber';
import { ImportAccountPage } from '../../pages/accounts/ImportAccountPage';
import { accountImportPath, expectedImportedAccountNames } from '../../models/accounts/accountImportFile';
import { CustomWorld } from '../../support/hooks';

let importAccountPage: ImportAccountPage;

Given('the user navigates to the import accounts page', async function (this: CustomWorld) {
    importAccountPage = new ImportAccountPage(this.page);
    await importAccountPage.navigateToImportAccounts();
});

When('the user uploads a valid account CSV file', async function () {
    await importAccountPage.uploadCSVFile(accountImportPath);
});

When('confirms the account import properties and mappings', async function () {
    await importAccountPage.confirmProperties();
    await importAccountPage.confirmMappings();
});

When('completes the account import', async function () {
    await importAccountPage.confirmAndImport();
    await importAccountPage.goToViewAccounts();
});

Then('the new account should appear in the account list', async function () {
    await importAccountPage.verifyAccountImported(expectedImportedAccountNames);
});
