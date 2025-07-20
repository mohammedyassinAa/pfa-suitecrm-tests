import { Page, Locator } from '@playwright/test';

export class ViewAccountsObjects {
    readonly page: Page;
    readonly accountsTab: Locator;
    readonly viewAccountsLink: Locator;
    readonly tableRows: Locator;
    readonly salesDropdown: Locator;
    
constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0'); 
    this.accountsTab = page.getByRole('link', { name: /Accounts/i });
    this.viewAccountsLink = page.getByRole('link', { name: /View Accounts/i });
    this.tableRows = page.locator('#MassUpdate table tbody tr');
}
}
