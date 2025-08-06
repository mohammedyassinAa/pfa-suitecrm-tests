import { Locator, Page } from '@playwright/test';

export class CreateOpportunityObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly opportunitiesLink: Locator;
  readonly createOpportunityButton: Locator;
  readonly opportunityNameInput: Locator;
  readonly accountNameInput: Locator;
  readonly suggestions: Locator;
  readonly expectedCloseDateInput: Locator;
  readonly amountInput: Locator;
  readonly salesStageDropdown: Locator;
  readonly saveButton: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.opportunitiesLink = page.getByRole('link', { name: 'Opportunities' });
    this.createOpportunityButton = page.getByRole('link', { name: 'Create Opportunity' });
    this.opportunityNameInput = page.locator('input[name="name"]');
    this.accountNameInput = page.locator('input[name="account_name"]');
    this.suggestions = page.locator('#EditView_account_name_results > div > div.yui-ac-bd > ul > li:nth-child(1)'); // adjust if suggestion list differs
    this.expectedCloseDateInput = page.locator('input[name="date_closed"]');
    this.amountInput = page.locator('input[name="amount"]');
    this.salesStageDropdown = page.locator('select[name="sales_stage"]');
    this.saveButton = page.locator('#SAVE').first();
    this.headerTitle = page.locator('h2.module-title-text');
}
}
