import { Given, When, Then } from '@cucumber/cucumber';
import { ImportOpportunityPage } from '../../pages/opportunities/ImportOpportunityPage';
import { oppImportPath, expectedImportedOppName } from '../../models/opportunities/oppImportFile';

import { CustomWorld } from '../../support/hooks';

let importOpportunityPage: ImportOpportunityPage;

Given('the user navigates to the import opportunities page', async function (this: CustomWorld) {
    importOpportunityPage = new ImportOpportunityPage(this.page);
    await importOpportunityPage.navigateToImportOpportunities();
});

When('the user uploads a valid opportunity CSV file', async function () {
    await importOpportunityPage.uploadCSVFile(oppImportPath);
});

When('maps the opportunity fields and proceeds', async function () {
    await importOpportunityPage.mapFieldsAndImport();
});

When('confirms the import process', async function () {
    await importOpportunityPage.confirmImport();
});

Then('the imported opportunity should appear in the list', async function () {
    await importOpportunityPage.navigateToViewOpportunities();
    await importOpportunityPage.verifyOpportunityImported(expectedImportedOppName);
});
