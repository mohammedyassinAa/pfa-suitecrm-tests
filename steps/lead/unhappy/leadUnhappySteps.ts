import {  When, Then } from '@cucumber/cucumber';
import { CreateLeadPage } from '../../../pages/lead/createLeadPage';
import { ViewLeadsPage } from '../../../pages/lead/ViewLeadsPage';
import { ImportLeadPage } from '../../../pages/lead/ImportLeadsPage';
import { CustomWorld } from '../../../support/hooks';
import {  leadImportErrorLastName } from '../../../models/lead/leadImportFile';

let createLeadPage: CreateLeadPage;
let importLeadPage: ImportLeadPage;
let viewLeadsPage: ViewLeadsPage;

// ========== CREATE LEAD UNHAPPY PATH ==========

When('the user submits the lead form without filling the last name', async function () {
    createLeadPage = new CreateLeadPage(this.page);
    await createLeadPage.fillFirstName('Test');
    await createLeadPage.submitForm();
});


Then('an error message {string} should be displayed under the {string} field', async function (this: CustomWorld, message: string, field: string) {
    await createLeadPage.verifyFieldErrorMessage(field, message);
});


// ========== IMPORT LEAD UNHAPPY PATH ==========


When('the user uploads a malformed lead CSV with missing last name', async function () {
    importLeadPage = new ImportLeadPage(this.page);
    await importLeadPage.uploadMalformedCSV(leadImportErrorLastName);
});

Then('an error message {string} should be displayed', async function (this: CustomWorld, message: string) {
    await importLeadPage.verifyImportErrorMessage(message);
});


// ========== VIEW LEAD UNHAPPY PATH ==========
Then('a message {string} should be displayed', async function (message: string) {
    viewLeadsPage = new ViewLeadsPage(this.page);
    await viewLeadsPage.verifyNoLeadsMessage(message);
});

