import { Page, Locator } from '@playwright/test';

export class ViewLeadsObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly leadsLink: Locator;
  readonly viewLeadsLink: Locator;
  readonly tableRows: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly noResultsMessage: Locator;
  readonly noLeadsMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.leadsLink = page.getByRole('link', { name: /Leads/i }); 
    this.viewLeadsLink = page.getByRole('link', { name: /View Leads/i });
    this.tableRows = page.locator('#MassUpdate table tbody tr');
    this.searchInput = page.locator('input#search_name_basic'); 
    this.searchButton = page.locator('input#search_form_submit');
    this.noResultsMessage = page.locator('table.list.view tbody tr td:has-text("No results found")'); 
    this.noLeadsMessage = page.locator('div.listViewEmpty');
  }
}
