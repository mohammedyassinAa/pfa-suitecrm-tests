import { Page, Locator } from '@playwright/test';

export class ViewLeadsObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly leadsLink: Locator;
  readonly viewLeadsLink: Locator;
  readonly leadsTableFirstRowNameCell: Locator;

  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.leadsLink = page.locator('a#moduleTab_Leads'); 
    this.viewLeadsLink = page.locator('a[data-action-name="List"]');
    this.leadsTableFirstRowNameCell = page.locator(
      '#MassUpdate > div.list-view-rounded-corners > table > tbody > tr:nth-child(1) > td:nth-child(4)'
    );
  }
}
