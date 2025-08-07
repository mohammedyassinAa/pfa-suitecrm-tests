import { ViewOpportunitiesObjects } from '../../objects/opportunities/viewOpportunityObjects';
import { expect , Page } from '@playwright/test';

export class ViewOpportunitiesPage {
    readonly objects: ViewOpportunitiesObjects;

    constructor(page : Page) {
        this.objects = new ViewOpportunitiesObjects(page);
    }

    async navigateToViewOpportunities() {
        await this.objects.salesDropdown.click();
        await this.objects.opportunitiesLink.click();
        await this.objects.viewOpportunitiesLink.click();
    }

    async verifyOpportunityVisible() {
        await expect(this.objects.tableRows.first()).toBeVisible();
    }
}
