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
    this.leadsLink = page.getByRole('link', { name: 'Leads' });
    this.viewLeadsLink = page.getByRole('link', { name: 'View Leads' });
    this.leadsTableFirstRowNameCell = page.locator(
      '#MassUpdate > div.list-view-rounded-corners > table > tbody > tr:nth-child(1) > td:nth-child(4)'
    );
  }
}
