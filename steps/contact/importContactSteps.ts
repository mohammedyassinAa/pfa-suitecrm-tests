import { Given, When, Then } from '@cucumber/cucumber';
import { ImportContactPage } from '../../pages/contact/ImportContactPage';
import { contactImportPath, expectedImportedContactFullName } from '../../models/contact/contactImportFile';
import { CustomWorld } from '../../support/hooks';

let importContactPage: ImportContactPage;

Given('the user navigates to the import contacts page', async function (this: CustomWorld) {
    importContactPage = new ImportContactPage(this.page);
    await importContactPage.navigateToImportContacts();
});

When('the user uploads a valid CSV file', async function () {
    await importContactPage.uploadCSVFile(contactImportPath);
});

When('confirms the import properties and mappings', async function () {
    await importContactPage.confirmProperties();
    await importContactPage.confirmMappings();
});

When('completes the import', async function () {
    await importContactPage.confirmAndImport();
    await importContactPage.goToViewContacts();
});

Then('the new contact should appear in the contact list', async function () {
    await importContactPage.verifyContactImported(expectedImportedContactFullName);
});
