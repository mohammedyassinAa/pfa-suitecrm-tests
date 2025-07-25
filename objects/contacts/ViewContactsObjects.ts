import { Page, Locator } from '@playwright/test';

export class ViewContactsObjects {
    readonly page: Page;
    readonly contactsTab: Locator;
    readonly viewContactLink: Locator;
    readonly tableRows: Locator;
    readonly salesDropdown: Locator;
    
constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0'); 
    this.contactsTab = page.getByRole('link', { name: /Contacts/i });
    this.viewContactLink = page.getByRole('link', { name: /View Contacts/i });
    this.tableRows = page.locator('#MassUpdate table tbody tr');
}
}
