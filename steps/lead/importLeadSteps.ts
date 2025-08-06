import { Given, When, Then } from '@cucumber/cucumber';
import { ImportLeadPage } from '../../pages/lead/ImportLeadsPage';
import { leadImportPath, expectedImportedLeadName } from '../../models/lead/leadImportFile';
import { CustomWorld } from '../../support/hooks';

let importLeadPage: ImportLeadPage;

Given('the user navigates to the import leads page', async function (this: CustomWorld) {
    importLeadPage = new ImportLeadPage(this.page);
    await importLeadPage.navigateToImportLeads();
});

When('the user uploads a valid leads CSV file', async function () {
    await importLeadPage.uploadCSVFile(leadImportPath);
});

When('maps the lead fields and continues', async function () {
    await importLeadPage.mapFieldsAndImport();
});

When('confirms and imports the leads', async function () {
    await importLeadPage.confirmDuplicatesAndImport();
    await importLeadPage.navigateToViewLeads();
});

Then('the new lead should appear in the lead list', async function () {
    await importLeadPage.verifyLeadImported(expectedImportedLeadName);
});
