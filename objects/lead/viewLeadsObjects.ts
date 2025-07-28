import { Page, Locator } from '@playwright/test';

export class ViewLeadsObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly leadsLink: Locator;
  readonly viewLeadsLink: Locator;
  readonly tableRows: Locator;
  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.leadsLink = page.getByRole('link', { name: /Leads/i }); 
    this.viewLeadsLink = page.getByRole('link', { name: /View Leads/i });
    this.tableRows = page.locator('#MassUpdate table tbody tr');
  }
}
