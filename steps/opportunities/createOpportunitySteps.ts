import { Given, When, Then } from '@cucumber/cucumber';
import { CreateOpportunityPage } from '../../pages/opportunities/CreateOpportunityPage';
import { testOpportunity } from '../../models/opportunities/opportunityModel';
import { CustomWorld } from '../../support/hooks';

let createOpportunityPage: CreateOpportunityPage;

Given('the user navigates to the opportunities module', async function (this: CustomWorld) {
    createOpportunityPage = new CreateOpportunityPage(this.page);
    await createOpportunityPage.navigateToOpportunities();
});

Given('clicks on create opportunity', async function () {
  await createOpportunityPage.clickCreateOpportunity();
});

When('the user fills out the opportunity creation form', async function () {
  await createOpportunityPage.fillOpportunityForm(testOpportunity);
});

Then('the new opportunity should be created successfully', async function () {
  await createOpportunityPage.verifyOpportunityCreated(testOpportunity.name);
});
