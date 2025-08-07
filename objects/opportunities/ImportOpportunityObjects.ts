import { Locator, Page } from '@playwright/test';

export class ImportOpportunityObjects {
    readonly page: Page;
    readonly salesDropdown: Locator;
    readonly opportunitiesLink: Locator;
    readonly importOpportunitiesLink: Locator;
    readonly fileInput: Locator;
    readonly importUpdateCheckbox: Locator;
    readonly nextButton: Locator;
    readonly goNextButton: Locator;
    readonly opportunityNameSelect: Locator;
    readonly accountNameSelect: Locator;
    readonly importNowButton: Locator;
    readonly viewOpportunitiesLink: Locator;
    readonly opportunityAmountSelect: Locator;
    readonly expectedCloseDateSelect: Locator;
    readonly salesStageSelect: Locator;

constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0'); 
    this.opportunitiesLink = page.getByRole('link', { name: 'Opportunities' });
    this.importOpportunitiesLink = page.getByRole('link', { name: 'Import Opportunities' });
    this.fileInput = page.locator('input[type="file"]');
    this.importUpdateCheckbox = page.locator('#import_update');
    this.nextButton = page.getByRole('button', { name: 'NEXT >' });
    this.goNextButton = page.locator('#gonext');
    this.opportunityNameSelect = page.locator('tr:has-text("opportunity_name") select');
    this.accountNameSelect = page.locator('tr:has-text("account_name") select');
    this.opportunityAmountSelect = page.locator('tr:has-text("opportunity_amount") select');
    this.expectedCloseDateSelect = page.locator('tr:has-text("expected_close_date") select');
    this.salesStageSelect = page.locator('tr:has-text("sales_stage") select').first();
    this.importNowButton = page.locator('#importnow');   
    this.viewOpportunitiesLink =  page.locator('#actionMenuSidebar > ul > li:nth-child(3) > a > div.actionmenulink');
}
}
