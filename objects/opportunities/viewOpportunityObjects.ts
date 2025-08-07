import { Page, Locator } from '@playwright/test';

export class ViewOpportunitiesObjects {
    readonly page: Page;
    readonly salesDropdown: Locator;
    readonly opportunitiesLink: Locator;
    readonly viewOpportunitiesLink: Locator;
    readonly tableRows: Locator;
    constructor(page: Page) {
        this.page = page;
        this.salesDropdown = page.locator('#grouptab_0');
        this.opportunitiesLink = page.getByRole('link', { name: /Opportunities/i }); 
        this.viewOpportunitiesLink = page.getByRole('link', { name: /View Opportunities/i });
        this.tableRows = page.locator('#MassUpdate table tbody tr');
    }
}
