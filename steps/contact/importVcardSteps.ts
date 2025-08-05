import { Given, When, Then } from '@cucumber/cucumber';
import { ImportVcardPage } from '../../pages/contact/ImportVcardPage';
import { CustomWorld } from '../../support/hooks';

let importVcardPage: ImportVcardPage;

Given('the user navigates to the import vCard page', async function (this: CustomWorld) {
    importVcardPage = new ImportVcardPage(this.page);
    await importVcardPage.navigateToImportVcard();
});

When('the user uploads a vCard file', async function () {
    await importVcardPage.importVcard();
});

Then('the new contact should be imported successfully', async function () {
    await importVcardPage.verifyImportSuccess();
});
