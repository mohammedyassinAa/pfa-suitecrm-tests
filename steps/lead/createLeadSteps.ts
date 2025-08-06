import { Given, When, Then } from '@cucumber/cucumber';
import { CreateLeadPage } from '../../pages/lead/createLeadPage';
import { CustomWorld } from '../../support/hooks';
import { mockLead } from '../../models/lead/leadModel';

let createLeadPage: CreateLeadPage;

Given('the user navigates to the leads module', async function (this: CustomWorld) {
    createLeadPage = new CreateLeadPage(this.page);
    await createLeadPage.navigateToLeads();
});

Given('clicks on create lead', async function () {
    await createLeadPage.clickCreateLead();
});

When('the user fills out the lead creation form', async function () {
    const { firstName, lastName, phone, email } = mockLead;
    await createLeadPage.createLead(firstName, lastName, phone, email);
});

Then('the new lead should be created successfully', async function () {
    const { firstName, lastName } = mockLead;
    const fullName = `${firstName} ${lastName}`;
    await createLeadPage.verifyLeadCreated(fullName);
});
