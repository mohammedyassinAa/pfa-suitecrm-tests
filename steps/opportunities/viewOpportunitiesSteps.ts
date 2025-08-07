import { Given, Then } from '@cucumber/cucumber';
import { ViewOpportunitiesPage } from '../../pages/opportunities/viewOpportunitiesPage';
import { CustomWorld } from '../../support/hooks';

let viewOpportunitiesPage: ViewOpportunitiesPage;

Given('the user navigates to the view opportunities page', async function (this: CustomWorld) {
    viewOpportunitiesPage = new ViewOpportunitiesPage(this.page);
    await viewOpportunitiesPage.navigateToViewOpportunities();
});

Then('the list of opportunities should be visible', async function () {
    await viewOpportunitiesPage.verifyOpportunityVisible();
});
