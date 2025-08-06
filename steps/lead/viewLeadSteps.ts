import { Given, Then } from '@cucumber/cucumber';
import { ViewLeadsPage } from '../../pages/lead/ViewLeadsPage';
import { CustomWorld } from '../../support/hooks';

let viewLeadsPage: ViewLeadsPage;

Given('the user navigates to the view leads page', async function (this: CustomWorld) {
    viewLeadsPage = new ViewLeadsPage(this.page);
    await viewLeadsPage.navigateToViewLeads();
});

Then('the list of leads should be visible', async function () {
    await viewLeadsPage.verifyLeadVisible();
});
